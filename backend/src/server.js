const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.APP_PORT || 3333;

app.listen(PORT, () => console.log('Server running on port:', PORT))