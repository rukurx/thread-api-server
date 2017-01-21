const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.set('port', port);

// Serve static files
app.use(express.static(__dirname + '/'));
app.use('/*', function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

// コメント追加
app.get('/comment/add/', (req, res) => {
  var param = {'title': req.query.title, 'body': req.query.body};
  res.send(param);
});

// likeユーザ取得
app.get('/likes/', (req, res) => {
  var param = {'likes': [
            {
                'id': 3,
                'user_name': 'ピコ太郎',
            },
            {
                'id': 4,
                'user_name': 'ピコ花子',
            }
        ]};
  // res.header('Content-Type', 'application/json; charset=utf-8');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(param);
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
