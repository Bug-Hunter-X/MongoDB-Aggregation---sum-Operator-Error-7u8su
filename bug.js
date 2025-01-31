```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", sum: {$sum: "$anotherFieldName"}}}, //This line might cause the error if "$anotherFieldName" is not a number
  {$sort: {sum: -1}}
])
```