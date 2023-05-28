import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(config.port, () => {
            console.log(`university app listening on port ${config.port}`)
          })
        console.log('Db Connected')
    } catch (error) {
        console.log('Failed to Connect Db' , error)
    }
  
  }

  main()