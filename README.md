# MongoDB Aggregation: $sum Operator Error
This repository demonstrates a common error encountered when using the `$sum` operator in MongoDB aggregation pipelines.  The issue arises when the field being summed is not of a numeric type. 

**Problem:** The provided aggregation pipeline attempts to sum a field that contains non-numeric values, causing the aggregation to fail or produce incorrect results. 

**Solution:**  The solution involves ensuring that the field used with `$sum` is of a numeric type (Integer, Double).  Data validation or data transformation steps within the pipeline can resolve this issue. This repository provides a corrected version of the aggregation pipeline.