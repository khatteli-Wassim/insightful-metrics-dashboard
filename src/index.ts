// Entry point for the application
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Welcome to the Insightful Metrics Dashboard!');
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
