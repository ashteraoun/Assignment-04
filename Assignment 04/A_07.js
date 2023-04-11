function getUniqueStrings(arr) {
    return [...new Set(arr)];
  }
  const myArr = ['Tikka', 'Biryani', 'Karachi Tea', 'Tikka', 'Biryani'];
const uniqueStrings = getUniqueStrings(myArr);
console.log(uniqueStrings); // Output: ["Tikka", "Biryani", "Karachi Tea"]
