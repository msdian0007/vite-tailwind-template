import { createPool } from "mysql2";

export const db = createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DATABASE,
});
