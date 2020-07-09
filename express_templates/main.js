const port = 3000,
express = require("express"),
homeController = require("./controllers/homeController"),
layout = require("express-ejs-layouts"),
app = express();

app.use(layout);

app.set("view engine", "ejs");

app.get("/name/:myName", homeController.respondWithName);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
