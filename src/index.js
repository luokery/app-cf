import { connect } from 'cloudflare:sockets';
import { renderHtml } from "./renderHtml.js";

export default {
  async fetch(request, env) {
    const stmt = env.DB.prepare("SELECT * FROM comments LIMIT 3");
    const { results } = await stmt.all();

    return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html",
      },
    });
  },
  async scheduled(event, env, ctx) {
    console.log(event.scheduledTime)
  },
};