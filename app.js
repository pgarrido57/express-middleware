'use strict';

const express = require('express');
const app = express();

const requestTime = (req, res, next) => {
	req.requestedTime = new Date().toISOString();
	next();
}

app.use(express.static(__dirname + '/public'));

app.use(requestTime);

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/public/home.html');
});

app.get('/see-our-chickens', (req, res, next) => {
	res.sendFile(__dirname + '/public/see-our-chickens.html');
});

app.get('/see-our-eggs', (req, res, next) => {
	res.sendFile(__dirname + '/public/see-our-eggs.html');
	console.log('You found the Easter Egg at ' + new Date().toISOString())
	console.log(
		`	   ggadddd8888888bbbbaaa,_
     ,ad888,      'Y88,      Y888baa,
   ,dP"  "Y8b,      '"Y8b,      '"Y8888ba,
  ,88      "Y88b,      "Y8ba,       "Y88Ya,
 ,P88b,      "Y88b,       "Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        "Y8ba,_      'Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   '8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         '""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
'b,"Y88ba,         ""Y88baa,_         """Y888bd"
 b, "Y88ba,_         ""Y888baa,_         ,8"
  8,   ""Y88ba,_         """Y8888baaaaaP"
   Ya,     ""Y888ba,_           "d88P"
     "Yb,,_     ""Y888baa,__,,adP""'
         """YYYY8888888PPPP"""' `)
});

app.use((req, res) => {
	res.send(`<h2>Error 404: Where do you think you're going!?!? Are you lost?</h2><img src="https://media.giphy.com/media/l2Jhr0LcBEpuQK7vi/giphy.gif">`)
});

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})
