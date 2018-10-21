const request = require('request-promise-native');

const appRouter = function (app) {
    app.get("/", async function(req, res) {
        const data = await request.get('https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/README.md');
        res.json(data);
    });
}

module.exports = appRouter;