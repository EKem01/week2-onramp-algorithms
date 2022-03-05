function increment(arr, value) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    arr[i]["val"] += value;
  }

  return arr;
}

module.exports = increment;
