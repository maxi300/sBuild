const esbuild = require('esbuild');

async function start() {
  // 1. Configuramos el contexto (Build + Watch)
  const ctx = await esbuild.context({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'public/bundle.js',
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.DEBUG': 'false',
    },
  });

  // 2. Activamos el modo observación (Watch)
  await ctx.watch();
  console.log('👀 Observando cambios en src...');

  // 3. Iniciamos el servidor (Serve)
  await ctx.serve({
    servedir: 'public',
    port: 3005,
  });

  console.log('🚀 Servidor corriendo en: http://localhost:3005');
}

// Ejecutamos y atrapamos errores
start().catch((err) => {
  console.error('❌ Error al iniciar:', err);
  process.exit(1);
});
