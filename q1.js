function findMax(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  console.log(findMax([7, 35, 19, 22, 31, 45, 12, 76, 42]));
  console.log(findMax([]));