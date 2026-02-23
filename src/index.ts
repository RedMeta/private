const port = Number(process.env.PORT) || 5173;

const server = Bun.serve({
  hostname: '0.0.0.0',
  port,
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const file = Bun.file(`./dist${pathname}`);

    if (await file.exists()) {
      return new Response(file);
    }

    const indexFile = Bun.file('./dist/index.html');
    if (await indexFile.exists()) {
      return new Response(indexFile, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`📱 Frontend server running at http://0.0.0.0:${server.port}`);
