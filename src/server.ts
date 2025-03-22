import mongoose from 'mongoose';
import config from './config';
import app from './app';

async function main() {
  try {
    mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`PortFolio is ROcking at port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
