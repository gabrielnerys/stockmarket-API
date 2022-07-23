require('dotenv').config();
const cors = require('cors');
const app = require('./app');

const { PORT } = process.env;

app.use(cors());
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('ouvindo porta', PORT));
