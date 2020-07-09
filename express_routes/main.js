const port = 3000,
express = require("express"),
homeController = require("./controllers/homeController"),
app = express();

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.post("/", (res, erq) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});


// app.get("/items/:vegetable", (req, res) => {
//   let veg = req.params.vegetable;
//   res.send(`This is the page for ${veg}`);
// });
app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});

app.post("/contact", (req, res) => {
  res.send("Contact information submitted successfully.");
});

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
