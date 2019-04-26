
var mongoxlsx = require('./lib/mongo-xlsx');
var model = null;
var xlsx  = './file.xlsx';

mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
  console.log(data); 
});

