let text =`{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}`
let json = JSON.stringify(text);
console.log(json)