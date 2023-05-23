import mongoose from "mongoose";
import { schemas } from "./schemas.js";
let url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.CLUSTER_NAME}.crtjuhp.mongodb.net/${process.env.MONGODB_DATABASE}`;
let db;
mongoose
  .connect(url)
  .then(console.log("connection established to mongoDB"))
  .catch((err) => console.log("Error: " + err));

const instasSchema = () => {
  const schema = mongoose.Schema;
  const someSchema = new schema(schemas.instas);
  db = mongoose.model("instas", someSchema);
  return;
};

export { instasSchema, db };
