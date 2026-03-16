export default defineConfig({
  plugins:[react()],
  server:{
    historyApiFallback:true,
    port:5173
  }
})