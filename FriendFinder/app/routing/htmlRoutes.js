app.get("/", function(req, res) {
  res.sendfile(__dirname + "/public/.html");
});

app.get("/survey", function(req, res) {
  res.sendfile(__dirname + "/public/.html");
});
