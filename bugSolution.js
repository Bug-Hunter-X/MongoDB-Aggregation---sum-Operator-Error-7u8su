```javascript
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$addFields: { anotherFieldName: {$toInt: "$anotherFieldName"}}}, //Convert the string type field to integer type
  {$group: {_id: "$fieldName", sum: {$sum: "$anotherFieldName"}}}, 
  {$sort: {sum: -1}}
])
```