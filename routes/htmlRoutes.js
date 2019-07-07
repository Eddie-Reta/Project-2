var path = require("path");

module.exports = function(app) {
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/html/maze.html"));
    });
    app.get("/maze.html", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/html/maze.html"));
    });
    app.get("/maze2.html", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/html/maze2.html"));
    });
};