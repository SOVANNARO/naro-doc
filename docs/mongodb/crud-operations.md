---
sidebar_position: 4
---

## **Create A Single Document**

Creating a single document in MongoDB is a fundamental operation. You can do this using the MongoDB Shell (`mongosh`), MongoDB Compass (GUI), or programmatically via a MongoDB driver (e.g., Python, Node.js, etc.). Below are the steps for each method:

---

### **1. Using MongoDB Shell (`mongosh`)**
1. Start the MongoDB Shell:
   ```bash
   mongosh
   ```

2. Switch to the desired database (or create it if it doesn’t exist):
   ```bash
   use school
   ```

3. Insert a single document into a collection:
    - Use the `insertOne()` method to create a single document.
    - Example:
      ```bash
      db.students.insertOne({
        name: "John Doe",
        age: 20,
        email: "john.doe@example.com",
        courses: ["Math", "Science"]
      })
      ```

4. Verify the document:
   ```bash
   db.students.find()
   ```
    - This will display all documents in the `students` collection.

---

### **2. Using MongoDB Compass (GUI)**
1. Open MongoDB Compass and connect to your MongoDB instance.
2. Select the database (e.g., `school`) and collection (e.g., `students`).
3. Click the **Insert Document** button.
4. Enter the document data in JSON format:
   ```json
   {
     "name": "Jane Doe",
     "age": 22,
     "email": "jane.doe@example.com",
     "courses": ["History", "Art"]
   }
   ```
5. Click **Insert** to save the document.

---

### **Key Points to Remember**
1. **`_id` Field**:
    - Every document in MongoDB must have a unique `_id` field.
    - If you don’t provide an `_id`, MongoDB will automatically generate one using `ObjectId`.

2. **Data Types**:
    - MongoDB supports various data types, including strings, numbers, arrays, objects, dates, and more.

3. **Flexibility**:
    - Documents in the same collection can have different structures (schema-less design).

---

### **Example Document**
Here’s an example of a document in the `students` collection:
```json
{
  "_id": ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
  "name": "John Doe",
  "age": 20,
  "email": "john.doe@example.com",
  "courses": ["Math", "Science"],
  "isActive": true,
  "createdAt": ISODate("2023-10-01T00:00:00Z")
}
```

---

### **Summary**
- Use `insertOne()` in the MongoDB Shell or a driver to create a single document.
- Documents are stored in BSON format (binary JSON).
- MongoDB automatically generates an `_id` if you don’t provide one.
- You can insert documents using the MongoDB Shell, MongoDB Compass, or programmatically via a driver.

Let me know if you need further clarification! 😊

Creating multiple documents in MongoDB is a common operation, especially when you need to insert bulk data. You can do this using the MongoDB Shell (`mongosh`), MongoDB Compass (GUI), or programmatically via a MongoDB driver (e.g., Python, Node.js, etc.). Below are the steps for each method:

---

## **Creating Multiple Documents**

### **1. Using MongoDB Shell (`mongosh`)**
1. Start the MongoDB Shell:
   ```bash
   mongosh
   ```

2. Switch to the desired database (or create it if it doesn’t exist):
   ```bash
   use school
   ```

3. Insert multiple documents into a collection:
   - Use the `insertMany()` method to create multiple documents.
   - Example:
     ```bash
     db.students.insertMany([
       {
         name: "John Doe",
         age: 20,
         email: "john.doe@example.com",
         courses: ["Math", "Science"]
       },
       {
         name: "Jane Doe",
         age: 22,
         email: "jane.doe@example.com",
         courses: ["History", "Art"]
       },
       {
         name: "Alice",
         age: 25,
         email: "alice@example.com",
         courses: ["Physics", "Chemistry"]
       }
     ])
     ```

4. Verify the documents:
   ```bash
   db.students.find()
   ```
   - This will display all documents in the `students` collection.

---

### **2. Using MongoDB Compass (GUI)**
1. Open MongoDB Compass and connect to your MongoDB instance.
2. Select the database (e.g., `school`) and collection (e.g., `students`).
3. Click the **Insert Document** button.
4. Switch to the **JSON** view and paste an array of documents:
   ```json
   [
     {
       "name": "John Doe",
       "age": 20,
       "email": "john.doe@example.com",
       "courses": ["Math", "Science"]
     },
     {
       "name": "Jane Doe",
       "age": 22,
       "email": "jane.doe@example.com",
       "courses": ["History", "Art"]
     },
     {
       "name": "Alice",
       "age": 25,
       "email": "alice@example.com",
       "courses": ["Physics", "Chemistry"]
     }
   ]
   ```
5. Click **Insert** to save the documents.

---

### **Key Points to Remember**
1. **`_id` Field**:
   - Every document in MongoDB must have a unique `_id` field.
   - If you don’t provide an `_id`, MongoDB will automatically generate one using `ObjectId`.

2. **Data Types**:
   - MongoDB supports various data types, including strings, numbers, arrays, objects, dates, and more.

3. **Atomicity**:
   - `insertMany()` is atomic at the document level, meaning each document is inserted individually. If one insert fails, the others will still proceed.

4. **Ordered vs. Unordered Inserts**:
   - By default, `insertMany()` performs an **ordered insert**, meaning it stops on the first error.
   - To perform an **unordered insert** (continue on error), pass the option `{ ordered: false }`:
     ```bash
     db.students.insertMany([...], { ordered: false })
     ```

---

### **Example Documents**
Here’s an example of multiple documents in the `students` collection:
```json
[
  {
    "_id": ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
    "name": "John Doe",
    "age": 20,
    "email": "john.doe@example.com",
    "courses": ["Math", "Science"],
    "isActive": true,
    "createdAt": ISODate("2023-10-01T00:00:00Z")
  },
  {
    "_id": ObjectId("65a1b2c3d4e5f6a7b8c9d0e2"),
    "name": "Jane Doe",
    "age": 22,
    "email": "jane.doe@example.com",
    "courses": ["History", "Art"],
    "isActive": true,
    "createdAt": ISODate("2023-10-02T00:00:00Z")
  },
  {
    "_id": ObjectId("65a1b2c3d4e5f6a7b8c9d0e3"),
    "name": "Alice",
    "age": 25,
    "email": "alice@example.com",
    "courses": ["Physics", "Chemistry"],
    "isActive": true,
    "createdAt": ISODate("2023-10-03T00:00:00Z")
  }
]
```

---

### **Summary**
- Use `insertMany()` in the MongoDB Shell or a driver to create multiple documents.
- Documents are stored in BSON format (binary JSON).
- MongoDB automatically generates an `_id` for each document if you don’t provide one.
- You can insert documents using the MongoDB Shell, MongoDB Compass, or programmatically via a driver.

Let me know if you need further clarification! 😊

Updating a document in MongoDB using a single filter is a common operation. You can update a document using the MongoDB Shell (`mongosh`), MongoDB Compass (GUI), or programmatically via a MongoDB driver (e.g., Python, Node.js, etc.). Below are the steps for each method:

---

## **Update document using single filter**

### **1. Using MongoDB Shell (`mongosh`)**
1. Start the MongoDB Shell:
   ```bash
   mongosh
   ```

2. Switch to the desired database:
   ```bash
   use school
   ```

3. Update a document using a single filter:
   - Use the `updateOne()` method to update a single document that matches the filter.
   - Example: Update the age of a student named "John Doe":
     ```bash
     db.students.updateOne(
       { name: "John Doe" }, // Filter
       { $set: { age: 21 } }  // Update operation
     )
     ```

4. Verify the update:
   ```bash
   db.students.find({ name: "John Doe" })
   ```

---

### **2. Using MongoDB Compass (GUI)**
1. Open MongoDB Compass and connect to your MongoDB instance.
2. Select the database (e.g., `school`) and collection (e.g., `students`).
3. Use the filter to find the document you want to update:
   - Enter the filter in the query bar (e.g., `{ name: "John Doe" }`).
4. Click on the document to open it.
5. Edit the document directly in the JSON view (e.g., change `age` to `21`).
6. Click **Update** to save the changes.

---

### **Key Points to Remember**
1. **Filter**:
   - The filter specifies which document(s) to update. It uses the same query syntax as `find()`.

2. **Update Operators**:
   - Use update operators like `$set`, `$inc`, `$push`, etc., to modify specific fields.
   - Example:
     ```bash
     db.students.updateOne(
       { name: "John Doe" },
       { $set: { age: 21, email: "john.doe@newdomain.com" } }
     )
     ```

3. **`updateOne()` vs. `updateMany()`**:
   - `updateOne()` updates the first document that matches the filter.
   - `updateMany()` updates all documents that match the filter.

4. **Upsert Option**:
   - If you want to insert a new document when no document matches the filter, use the `upsert` option:
     ```bash
     db.students.updateOne(
       { name: "John Doe" },
       { $set: { age: 21 } },
       { upsert: true }
     )
     ```

---

### **Example Update Operations**
1. Update a single field:
   ```bash
   db.students.updateOne(
     { name: "John Doe" },
     { $set: { age: 21 } }
   )
   ```

2. Update multiple fields:
   ```bash
   db.students.updateOne(
     { name: "John Doe" },
     { $set: { age: 21, email: "john.doe@newdomain.com" } }
   )
   ```

3. Increment a numeric field:
   ```bash
   db.students.updateOne(
     { name: "John Doe" },
     { $inc: { age: 1 } } // Increment age by 1
   )
   ```

4. Add an element to an array:
   ```bash
   db.students.updateOne(
     { name: "John Doe" },
     { $push: { courses: "Biology" } }
   )
   ```

---

### **Summary**
- Use `updateOne()` to update a single document that matches a filter.
- Use update operators like `$set`, `$inc`, and `$push` to modify specific fields.
- You can update documents using the MongoDB Shell, MongoDB Compass, or programmatically via a driver.

Let me know if you need further clarification! 😊

--- 

Updating documents using multiple filters in MongoDB allows for more granular selection. Here's a guide on how to do this using different methods:

---

## **Update Documents using multiple filters**

### **1. MongoDB Shell (`mongosh`)**
#### Steps:
1. Start the MongoDB Shell:
   ```bash
   mongosh
   ```

2. Switch to the desired database:
   ```bash
   use school
   ```

3. Use the `updateOne()` method with multiple filters by combining query conditions:
   - Example: Update the age of a student named "John Doe" who is enrolled in "Physics":
     ```bash
     db.students.updateOne(
       { name: "John Doe", courses: "Physics" }, 
       { $set: { age: 22 } }
     )
     ```

4. Using logical operators (`$and`, `$or`):
   ```bash
   db.students.updateOne(
     { $and: [ { name: "John Doe" }, { age: { $gt: 20 } } ] },
     { $set: { major: "Engineering" } }
   )
   ```

---

### **2. Using MongoDB Compass (GUI)**
1. Open MongoDB Compass and connect to your instance.
2. Select the database (`school`) and collection (`students`).
3. Use the query bar to filter by multiple conditions:
   ```json
   { "name": "John Doe", "courses": "Physics" }
   ```
   Or:
   ```json
   { "$and": [ { "name": "John Doe" }, { "age": { "$gt": 20 } } ] }
   ```

4. Select the document and edit it manually, then click **Update**.

---

### **Key Points**
- **Logical Operators**:
   - `$and`: Combines conditions, all must match.
   - `$or`: Any one condition must match.
   - `$nor`: None of the conditions should match.
   - `$not`: Negates a condition.

- **Example Operations**:
   1. Update when both conditions are met (`name` and `age`):
      ```bash
      db.students.updateOne(
        { $and: [ { name: "John Doe" }, { age: { $lt: 25 } } ] },
        { $set: { major: "Mathematics" } }
      )
      ```

   2. Update when either condition is met (`name` or `age`):
      ```bash
      db.students.updateMany(
        { $or: [ { name: "John Doe" }, { age: { $lt: 20 } } ] },
        { $set: { status: "Part-Time" } }
      )
      ```

   3. Update all except a condition:
      ```bash
      db.students.updateMany(
        { $not: { age: { $gte: 30 } } },
        { $set: { status: "Junior" } }
      )
      ```

By mastering logical filters, you gain powerful control over document updates. Let me know if you need code for other languages or additional clarifications!

---

Reading documents from MongoDB is a fundamental operation and can be done using MongoDB Shell (`mongosh`), MongoDB Compass, or programmatically via MongoDB drivers such as `pymongo`. Below is a detailed guide:

---

### **1. MongoDB Shell (`mongosh`)**

#### **Steps:**
1. Start the MongoDB shell:
   ```bash
   mongosh
   ```

2. Switch to the target database:
   ```bash
   use school
   ```

3. **Read operations:**
   - **Retrieve all documents:**
     ```bash
     db.students.find()
     ```

   - **Pretty-print the result:**
     ```bash
     db.students.find().pretty()
     ```

   - **Find a single document:**
     ```bash
     db.students.findOne({ name: "John Doe" })
     ```

   - **Filter documents:**  
     Retrieve all students aged 21:
     ```bash
     db.students.find({ age: 21 })
     ```

   - **Limit, Skip, and Sort:**
      - Limit the number of documents to 5:
        ```bash
        db.students.find().limit(5)
        ```
      - Skip the first 3 results:
        ```bash
        db.students.find().skip(3)
        ```
      - Sort documents by `age` in descending order:
        ```bash
        db.students.find().sort({ age: -1 })
        ```

---

## **Reading Documents in MongoDB**

### **2. Using MongoDB Compass (GUI)**
1. Open MongoDB Compass and connect to your MongoDB instance.
2. Select the target database (`school`) and collection (`students`).
3. Use the **Filter** box to query documents:
   - Retrieve documents where `age` is 21:
     ```json
     { "age": 21 }
     ```
4. Click **Find** to display the results.

---

### **Key Operations**
- **Projection:** Select specific fields to return:
  ```bash
  db.students.find({ age: 21 }, { name: 1, age: 1, _id: 0 })
  ```
  In Python:
  ```python
  projection = { "_id": 0, "name": 1, "age": 1 }
  for student in collection.find({ "age": 21 }, projection):
      print(student)
  ```

- **Comparison Operators:**  
  MongoDB supports various query operators:
   - `$gt`: Greater than
   - `$lt`: Less than
   - `$gte`: Greater than or equal
   - `$lte`: Less than or equal
   - `$ne`: Not equal

  **Example Query:**  
  Find students older than 20:
  ```bash
  db.students.find({ age: { $gt: 20 } })
  ```

- **Logical Operators:**
  ```bash
  db.students.find({ $or: [ { age: 21 }, { name: "Jane Doe" } ] })
  ```

---

### **Summary**
- Use `find()` for multiple documents and `findOne()` for a single document.
- Enhance queries with filtering, projection, sorting, limiting, and skipping.
- MongoDB drivers, Compass, and `mongosh` provide versatile tools for reading data efficiently.

Let me know if you'd like more practical examples or help with another language!

## **Deleting Documents in MongoDB**

You can delete documents in MongoDB using the MongoDB Shell (`mongosh`), MongoDB Compass (GUI), or programmatically through various MongoDB drivers.

---

### **1. Using MongoDB Shell (`mongosh`)**

#### **Steps:**
1. Start the MongoDB shell:
   ```bash
   mongosh
   ```

2. Switch to the target database:
   ```bash
   use school
   ```

3. **Delete Operations:**
   - **Delete a single document:**  
     Deletes the first document that matches the filter:
     ```bash
     db.students.deleteOne({ name: "John Doe" })
     ```

   - **Delete multiple documents:**  
     Deletes all documents that match the filter:
     ```bash
     db.students.deleteMany({ age: { $lt: 18 } })
     ```

   - **Delete all documents:**  
     Warning: This removes all documents in the collection:
     ```bash
     db.students.deleteMany({})
     ```

---

### **2. Using MongoDB Compass (GUI)**

#### **Steps:**
1. Open MongoDB Compass and connect to your instance.
2. Select the target database (`school`) and collection (`students`).
3. Use the **Filter** box to specify the documents to delete:
   - Example filter to match students under 18:
     ```json
     { "age": { "$lt": 18 } }
     ```

4. Click **Find** to view the matching documents.
5. Select the documents manually or click **Delete Documents** to remove them.

---

### **Key Points**
- **Delete Methods:**
   - `deleteOne()` removes the first matching document.
   - `deleteMany()` removes all matching documents.

- **Filters:** Deletion filters follow the same syntax as `find()` queries.

- **Warning:** Always double-check your filter conditions before using `deleteMany({})` to avoid accidental data loss.

---

## **Importing JSON File to MongoDB Using Shell (`mongosh`)**

You can import a JSON file into MongoDB using the `mongoimport` command. Here's a step-by-step guide:

---

### **Prerequisites**
1. Ensure MongoDB is installed and running on your system.
   - Start MongoDB if it's not running:
     ```bash
     mongod
     ```
2. Have your JSON file ready (e.g., `students.json`).

---

### **Steps to Import JSON File**
1. **Open a terminal and navigate to the directory containing your JSON file:**
   ```bash
   cd /path/to/your/json-file
   ```

2. **Use the `mongoimport` command:**
   ```bash
   mongoimport --db school --collection students --file students.json --jsonArray
   ```

   **Explanation:**
   - `--db`: Specifies the target database (`school` in this example).
   - `--collection`: The collection where the data will be imported (`students`).
   - `--file`: Path to the JSON file (`students.json`).
   - `--jsonArray`: Required if the JSON file contains an array of documents.

---

### **Example JSON File (`students.json`)**
```json
[
  { "name": "John Doe", "age": 21, "major": "Physics" },
  { "name": "Jane Smith", "age": 22, "major": "Biology" },
  { "name": "Alice Brown", "age": 20, "major": "Mathematics" }
]
```

---

### **Verify the Import**
After running the import command, verify the data in `mongosh`:

```bash
mongosh
use school
db.students.find().pretty()
```

---

### **Additional Options**
- **Drop existing collection before import:**
   ```bash
   mongoimport --db school --collection students --file students.json --jsonArray --drop
   ```

- **Authentication (if required):**
   ```bash
   mongoimport --db school --collection students --file students.json --jsonArray --username <user> --password <password> --authenticationDatabase admin
   ```

---

This should help you successfully import JSON data into MongoDB. Let me know if you need further assistance! 😊

---
## **Importing CSV File to MongoDB Using Shell (`mongosh`)**

To import CSV files into MongoDB, you use the `mongoimport` command. Below is a detailed guide:

---

### **Prerequisites**
1. Ensure MongoDB is installed and running.
   ```bash
   mongod
   ```

2. Have your CSV file ready (e.g., `students.csv`).  
   Example contents of `students.csv`:
   ```csv
   name,age,major
   John Doe,21,Physics
   Jane Smith,22,Biology
   Alice Brown,20,Mathematics
   ```

---

### **Steps to Import CSV**
1. **Navigate to the directory containing your CSV file:**
   ```bash
   cd /path/to/your/csv-file
   ```

2. **Run the `mongoimport` command:**
   ```bash
   mongoimport --db school --collection students --type csv --file students.csv --headerline
   ```

   **Explanation:**
   - `--db`: Target database (`school`).
   - `--collection`: Target collection (`students`).
   - `--type csv`: Specifies the input file type.
   - `--file`: Path to the CSV file.
   - `--headerline`: Indicates the first row of the CSV contains field names.

---

### **Verify the Import**
1. Open `mongosh`:
   ```bash
   mongosh
   ```

2. Check the data:
   ```bash
   use school
   db.students.find().pretty()
   ```

---

### **Additional Options**
- **Drop existing collection before import:**
   ```bash
   mongoimport --db school --collection students --type csv --file students.csv --headerline --drop
   ```

- **Authentication (if required):**
   ```bash
   mongoimport --db school --collection students --type csv --file students.csv --headerline --username <user> --password <password> --authenticationDatabase admin
   ```

- **Custom Delimiters:**  
  If your CSV uses a delimiter other than a comma (e.g., semicolon `;`):
   ```bash
   mongoimport --db school --collection students --type csv --file students.csv --headerline --fieldsDelimiter ";"
   ```

---




