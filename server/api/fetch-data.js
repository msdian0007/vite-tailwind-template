import {db, instasSchema} from "../config/mongo-con.js";

export const fetchData = async (req, resp) => {
  instasSchema();
  const response = await db.find().exec();
  resp.send(response)
};
