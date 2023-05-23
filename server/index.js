import app from "./config/app.js";
import { fetchData } from "./api/fetch-data.js";

app.get("/", (req, resp) => {
  fetchData(req, resp);
});

app.listen(process.env.SERVER_PORT_NUMBER, () => {
  console.log("Server is running on " + process.env.SERVER_PORT_NUMBER);
});
