var http = require("http");
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { "Conten-Type": "application/json" });

    var obj = {
        "movie": [
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            },
            {
                "id": "1",
                "name": "ajkahsk",
                "year": "3464"
            }
        ]
    }
    res.end(JSON.stringify(obj))
}).listen(8888);
