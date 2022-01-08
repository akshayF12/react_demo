
const Koa = require('Koa');
const connectToMongo = require('../server/db');
const port = 5000;
const app = new Koa()
// start mongo db
connectToMongo();

// welcome msg
// app.use(ctx =>{
//  ctx.body="hello"
// })

app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });