import { Mongo } from "@mayajs/mongo";
import sample from "../controllers/sample/sample.model";

export = Mongo({
  name: "crud",
  connectionString: "mongodb+srv://root:root@sample.ny3ze.mongodb.net/test?retryWrites=true&w=majority",
  schemas: [
    sample, // Add Mongoose Schema here
  ],
});