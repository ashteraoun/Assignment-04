function getObjectValuesByKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  const myArr = [
    { name: 'Muhammad Ashter ', age: 22 },
    { name: 'Kazim Ali', age: 25 },
    { name: 'Waseem Awon Ali', age: 28 }
  ];
  
  const values = getObjectValuesByKey(myArr, 'name');
  console.log(values); // Output: ["Muhammad Ashter", "Kazim Ali", "Waseem Aown Ali"]
    