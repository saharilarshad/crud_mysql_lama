import express from "express";
import dotenv from "dotenv";
import routeBooks from "./routes/books.js";
import cors from "cors"

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/", routeBooks);

// app.get("/", (req, res) => {
//   res.json("Homepage Backend");
// });



app.listen(process.env.PORT || 5000, () => {
  console.log("Connected to Backend");
});
