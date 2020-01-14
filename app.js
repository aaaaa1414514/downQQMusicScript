const Koa = require('koa')

const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');


const app = new Koa()

app.use(bodyParser());
app
  .use(apiRouter.routes())
// app.use( async ( ctx ) => {
//   ctx.body = 'hello koa2'

//   superagent
//   .post('http://music.ifkdy.com/')
//   .send({input: '王菲',filter: 'name',type: 'netease',page: 1})
//   .set('Accept', 'application/json')
//   .set('X-API-Key', 'foobar')
//   .end(function(res){
//     console.log(res)
//   });
// })

app.listen(3000,() => {
    console.log('server running in 3000')
})