const appRouter = function (app) {
    app.get("/", function(req, res) {
        res.status(200).send(JSON.stringify({home: 'someData'}));
    });
    app.get("/site", function(req, res) {
        res.status(200).send(JSON.stringify({user: 'someData'}));
    });
    app.get("/data", function(req, res) {
        res.status(200).send(JSON.stringify({data: 'someData'}));
    });
}

module.exports = appRouter;