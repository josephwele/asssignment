function decodeArray(arr){
  let total = ''
  for (let i = 0; i < arr.length-1; i++){
    total += Math.abs(arr[i] - arr[i+1])
  }
  return total
}

console.log(decodeArray([0,-3,0,4,0]))
