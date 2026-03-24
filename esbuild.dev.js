require("esbuild").build({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "public/bundle.js"

}).catch(() => process.exit(1));
 