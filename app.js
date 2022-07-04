const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	const photo = {
		id: 1,
		name: 'Photo Name',
		description: 'Photo description',
	};
	res.send(photo);
});

const port = 3000;
app.listen(port, () => {
	console.log(`Sunucu ${port} portunda başlatıldı`);
	console.log(`http://127.0.0.1:${port}`);
});
