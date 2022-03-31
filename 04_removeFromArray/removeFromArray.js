const removeFromArray = function(array) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    let deleteItem = false;
    for (let a = 1; a < arguments.length; a++) {
      if (array[i] === arguments[a]) {
        deleteItem = true;
        break;
      }
    }
    if (deleteItem == false) {
      newArray = newArray.concat(array[i]);
    }
  }
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
