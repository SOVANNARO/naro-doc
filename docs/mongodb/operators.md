---
sidebar_position: 4
---

## **Operators in MongoDB**

MongoDB offers a variety of operators that help in querying, updating, and manipulating data. Below are key categories and commonly used operators:

---

### **1. Query Operators**
Used to filter documents in queries (`find()`, `findOne()`).

| **Operator** | **Description** | **Example Query** |
|--------------|------------------|-------------------|
| `$eq`        | Equals            | `{ age: { $eq: 21 } }` |
| `$ne`        | Not equals        | `{ age: { $ne: 21 } }` |
| `$gt`        | Greater than      | `{ age: { $gt: 18 } }` |
| `$gte`       | Greater or equal  | `{ age: { $gte: 18 } }` |
| `$lt`        | Less than         | `{ age: { $lt: 18 } }` |
| `$lte`       | Less or equal     | `{ age: { $lte: 18 } }` |
| `$in`        | Matches any value | `{ major: { $in: ["Physics", "Biology"] } }` |
| `$nin`       | Not in list       | `{ major: { $nin: ["Math", "History"] } }` |

---

### **2. Logical Operators**
Used to combine query conditions.

| **Operator** | **Description** | **Example Query** |
|--------------|------------------|-------------------|
| `$and`       | Logical AND       | `{ $and: [ { age: { $gt: 18 } }, { major: "Physics" } ] }` |
| `$or`        | Logical OR        | `{ $or: [ { major: "Physics" }, { major: "Math" } ] }` |
| `$not`       | Negates condition | `{ age: { $not: { $lt: 18 } } }` |
| `$nor`       | Logical NOR       | `{ $nor: [ { major: "Physics" }, { age: { $gt: 21 } } ] }` |

---

### **3. Update Operators**
Used to modify fields in documents.

| **Operator** | **Description** | **Example Query** |
|--------------|------------------|-------------------|
| `$set`       | Updates a field   | `{ $set: { age: 22 } }` |
| `$unset`     | Removes a field   | `{ $unset: { major: "" } }` |
| `$inc`       | Increments a value| `{ $inc: { age: 1 } }` |
| `$mul`       | Multiplies a value| `{ $mul: { age: 2 } }` |
| `$rename`    | Renames a field   | `{ $rename: { "oldField": "newField" } }` |
| `$push`      | Adds to an array  | `{ $push: { courses: "Biology" } }` |
| `$pop`       | Removes from array| `{ $pop: { courses: -1 } }` |
| `$pull`      | Removes by value  | `{ $pull: { courses: "Physics" } }` |

---

### **4. Array Operators**
Used for querying and updating arrays.

| **Operator** | **Description** | **Example Query** |
|--------------|------------------|-------------------|
| `$all`       | Matches all values in an array | `{ courses: { $all: ["Physics", "Math"] } }` |
| `$elemMatch` | Matches array element | `{ courses: { $elemMatch: { score: { $gt: 90 } } } }` |
| `$size`      | Matches array size | `{ courses: { $size: 3 } }` |

---

### **5. Element Operators**
Used to match fields based on their existence or type.

| **Operator** | **Description** | **Example Query** |
|--------------|------------------|-------------------|
| `$exists`    | Field existence   | `{ major: { $exists: true } }` |
| `$type`      | Matches data type | `{ age: { $type: "int" } }` |

---

### **6. Aggregation Operators**
Used within aggregation pipelines.

| **Operator** | **Description** | **Example** |
|--------------|------------------|-------------|
| `$sum`       | Calculates sum    | `{ $sum: "$amount" }` |
| `$avg`       | Calculates average| `{ $avg: "$score" }` |
| `$max`       | Finds maximum     | `{ $max: "$score" }` |
| `$min`       | Finds minimum     | `{ $min: "$score" }` |

---

### **7. Comparison Operators in Aggregation**
Used in aggregation queries.

| **Operator** | **Description** | **Example** |
|--------------|------------------|-------------|
| `$eq`        | Equals            | `{ $eq: ["$age", 21] }` |
| `$gt`        | Greater than      | `{ $gt: ["$age", 18] }` |

---

### **Summary**
- Query operators filter data (`$eq`, `$gt`, `$in`).
- Logical operators combine multiple conditions (`$and`, `$or`).
- Update operators modify data (`$set`, `$push`).
- Array and aggregation operators handle more complex data structures.

Let me know if you want more practical examples or clarifications! 😊