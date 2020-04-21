// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write(JSON.stringify(projects, null, 4)); //Making whole object to STRING
//     response.end();

// });

// //Setting up host port or using local port
// const port = process.env.PORT || 1337;
// server.listen(port);


// Using Express to GET CALLS
var express = require("express");
var app = express();

app.get("/portfolio", (req, res, next) => {
    res.json(projects);

});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on HOST or port 3000");
});

//My portffolio object
const projects = [{
    title: "Science Museum",
    description: "In this Semester Project I projected and created a Website for a Science Museum new in the city easy to navigate and use, as well responsive.The site appeal primary fo middle school children’s between 7 to 15 years and encourages them,their families and school to visit the Science Museum.",
    background_image: {
        link: "http://www.upneto.com/htmlcss/sp01/index.html",
        src: "images/science-museum.jpg",
        alt: "Science Museum Website",
        title: "Science Museum Semester Project",
    },
    technology: [{
            name: "HTML5",
            icon: "fab fa-html5 fa-2x"
        },
        {
            name: "CSS3",
            icon: "fab fa-css3-alt fa-2x"
        },
        {
            name: "ADOBE",
            icon: "fab fa-adobe fa-2x"
        }
    ]
}];

console.log("Server running at http://localhost:%d", port);