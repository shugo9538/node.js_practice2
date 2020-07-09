const port = 3000,
express = require("express");

exports.respondWithName = (req, res) => {
  let paramsName = req.params.myName;
  res.render("index", {name: paramsName});
};
