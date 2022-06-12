import express, { Response } from 'express';
import cors from 'cors';

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: '*' }))

app.get('/', (_, res: Response) => {
	res.status(200).send('hi');
});

app.get('/ping', (_, res: Response) => {
	res.status(200).send('pong');
});

app.listen(port, () => {
	console.log(`server listen to port ${port}`);
});