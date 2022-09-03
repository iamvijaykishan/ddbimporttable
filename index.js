const AWS = require('aws-sdk')
AWS.config.update({
  region: "us-east-1" //Here add you region
});
const dynamodb = new AWS.DynamoDB();

var params = {
    InputFormat: 'CSV', /* required */
    S3BucketSource: { /* required */
      S3Bucket: 'ddbimport-iamvijakishan' /* required */
     },
    TableCreationParameters: { /* required */
      AttributeDefinitions: [ /* required */
      {
        AttributeName: 'id', /* required */
        AttributeType: 'N' /* required */
      }
        /* more items */
      ],
      KeySchema: [ /* required */
        {
          AttributeName: 'id', /* required */
          KeyType: 'HASH'  /* required */
        },
        /* more items */
      ],
      TableName: 'DDB-Import',
      BillingMode: 'PAY_PER_REQUEST'
    }
  };

 dynamodb.importTable(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  })
