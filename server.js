const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//Local :
// mongoose.connect(process.env.DATABASE_LOCAL)

// HOSTED
mongoose
  .connect(
    DB /*{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }*/
  )
  .then(() => console.log('DB connection successful!'));

// console.log(process.env);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running at port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shuting Down...');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shuting Down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
