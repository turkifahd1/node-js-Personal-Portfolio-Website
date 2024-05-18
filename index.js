const express = require("express");
const app = express();
const port =  3000||process.env.PORT ;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());
const Newrouter = require("./routers/NewsRoutes");

const middlewareFunction = require("./middleware/errors");



app.use("/api", Newrouter);

app.use(middlewareFunction);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
