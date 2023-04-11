function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  const myObj = {
    name: 'Muhammad Ashter Aown Ali',
    age: 22,
    city: 'Shah Faisal'
  };
  
  const keys = getObjectKeys(myObj);
  console.log(keys); // Output: ["name", "age", "city"]
    