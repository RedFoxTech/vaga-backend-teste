var mongoxlsx = require('./../lib/mongo-xlsx');

var model = null;
var xlsx  = './test/input/date_test.xlsx';

mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
  console.log(err);
  console.log(data);
});
