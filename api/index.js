// set db connection from other env variables
process.env.NC_DB = `mysql2://${process.env.TIDB_HOST}:${process.env.TIDB_PORT}?u=${process.env.TIDB_USER}&p=${process.env.TIDB_PASSWORD}&d=nocodb`;

const app = require('express')();
// const { Noco } = require('nocodb');

(async () => {
  try {
    const httpServer = app.listen(process.env.PORT || 8080);
    // app.use(await Noco.init({}, httpServer, app));
    // app.get('/api', (req, res) => {
    //   res.setHeader('Content-Type', 'text/html');
    //   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    //   res.end(`Hello! World</a>`);
    // });
    console.log(`Visit : localhost:${process.env.PORT}/dashboard`);
  } catch (e) {
    console.log(e);
  }
})();

module.exports = app;
