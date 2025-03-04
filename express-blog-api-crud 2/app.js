const express = require('express');
const app = express();
const port = 3000;

const postRouter = require('./routers/postsRouter');

//middlewares
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(express.static('public'));

app.use(express.json());

//home 
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use('/api/posts', postRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});