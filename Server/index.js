const = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(3000, function(){
    Console.log("Application is rnning on part 3000");
});