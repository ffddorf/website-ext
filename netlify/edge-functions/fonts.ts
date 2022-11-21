import type { Context } from "https://edge.netlify.com";
import * as css from "https://esm.sh/css@3.0.0";
import * as contentType from "https://deno.land/x/content_type@1.0.1/mod.ts";

export default async (
  request: Request,
  _context: Context
): Promise<Response> => {
  const { searchParams } = new URL(request.url);
  const url = `https://fonts.googleapis.com/css?${searchParams.toString()}`;
  console.log("going to:", url);
  const resp = await fetch(url, {
    headers: {
      // User-Agent is used to serve the right font format
      "User-Agent": request.headers.get("User-Agent") || "",
    },
  });
  if (!resp.ok) {
    return new Response("Request to upstream failed", { status: 503 });
  }
  const ct = contentType.parse(resp.headers.get("Content-Type") ?? "");
  if (ct.type != "text/css") {
    console.log("Response was not CSS, but was:", ct);
    return resp;
  }

  try {
    const newCSS = rewriteURLs(await resp.text());
    return new Response(newCSS, resp);
  } catch (e) {
    return new Response(e, { status: 500 });
  }
};

const urlRegexp = /url\(([^\)]+)\)/;
const rewriteURLs = (text: string): string => {
  const sheet = css.parse(text);
  if (sheet.stylesheet?.parsingErrors?.length) {
    throw new Error(`Invalid CSS: ${sheet.stylesheet?.parsingErrors}`);
  }

  for (const rule of sheet.stylesheet?.rules || []) {
    if (rule.type !== "font-face") {
      continue;
    }
    for (const prop of (rule as css.FontFace).declarations || []) {
      const decl = prop as css.Declaration;
      if (decl.property !== "src" || !decl.value) {
        continue;
      }
      const matches = urlRegexp.exec(decl.value);
      if (!matches || matches.length < 2) {
        continue;
      }
      const url = new URL(matches[1]);
      decl.value = decl.value.replace(
        urlRegexp,
        `url(/fonts/file${url.pathname})`
      );
    }
  }

  return css.stringify(sheet);
};
