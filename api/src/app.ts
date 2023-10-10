import { envs } from "./config/envs.config";
import { MongoDatabase } from "./data/mongo-database";
import { AppRoutes } from "./routes/routes";

import Server  from "./server/server";




const main = async () => {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URI,
        dbName: envs.MONGO_DB_NAME,
    })

    new Server({
       port: envs.PORT,
       routes: AppRoutes.routes
    }).start();
};



(() => {
    main();
})();
