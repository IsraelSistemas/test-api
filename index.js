const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(3002, _ => {
	const apiRunningMsg = "El servidor fue levantado correctamente en el puerto 3002";

	console.log(apiRunningMsg);

	app.get("/", (req, res) => {
		res.status(200).send({
			statusCode: 200,
      status: 'Ok',
      message: apiRunningMsg,
      error: false
		});
	});
});