//Import the Express.js library
const express = require('express');
//Create an instance of the Express application
const app = express();
//Defines the port number for the server to listen on
const port = 3000;

//Defines a route for the root URL ("/")
app.get('/', (req, res) => {
	//When a GET request is made to the root URL,
	//send a response with the "Hello World"
	res.send('Hello World');
});

// Start the server, listening on the specified port
app.listen(port, () => {
	//Callback function executed when the server starts
	console.log(`Server is listening at http://localhost:${port}`);
});