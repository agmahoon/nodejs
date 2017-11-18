var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Going for deployment on Jenkins (Continous Integration)");
});

app.listen(4000);
