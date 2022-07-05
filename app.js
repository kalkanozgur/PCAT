const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');
//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
	//res.sendFile(path.resolve(__dirname, 'views/index.html'));
	res.render("index");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Sunucu ${port} portunda başlatıldı`);
	console.log(`http://127.0.0.1:${port}`);
});
