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
const port = process.env.PORT || 3000; // //Setting up host port or using local port
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
    },
    {
        title: "ReCycle App & Website",
        description: "Re-Cycle mainly target of customers will be travelers using mobile devices to reach our services on the internet.I designed using Mobile first approach, that means that i needed to design for Smartphones first and scale up to larger devices, like Tablets and PC.",
        background_image: {
            link: "https://upneto.com/htmlcss/ca/index.html",
            src: "images/recycle-app.jpg",
            alt: "ReCycle Website",
            title: "ReCycle Website",
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
    },
    {
        title: "RodFrame Photography",
        show: true,
        description: "This is a Website I did to a a Photografer that lives in Madeira - Portugal.He wanted a Clean and Easy layout that focused just on the images on the site I used Wix content manager to create this website and showed my customer how he would updated and maintain the Website.",
        background_image: {
            link: "https://www.rodframe.com/",
            src: "images/rodframe-website.jpg",
            alt: "RodFrame Website",
            title: "RodFrame Photography Website",
        },

        technology: [{
            name: " ",
            icon: "fab fa-wix fa-2x"
        }]
    }

];

console.log("Server running at http://localhost:%d", port);