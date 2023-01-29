const express = require('express');
const app = express();
var fs = require("fs");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(3000);

app.get('/userdata', function (req, res) {
	fs.readFile("./Backend/users.json", function (err, data) {
		if (err) {
			console.error(err);
		}
		console.log(data.toString());
		res.send(data.toString());
	})
})

app.post('/useradd', function (req, res) {
	fs.readFile("./Backend/users.json", function (err, data) {
		if (err) {
			console.error(err);
		}
		fileData = JSON.parse(data.toString());
		userData = fileData.data;
		reqData = req.body;
		userData.push(reqData);
		fileData.data = userData;
		fs.writeFile("Backend/users.json", JSON.stringify(fileData), function (err) {
			if (err) {
				console.error(err);
			}
			res.send(userData)
		})
	})
})