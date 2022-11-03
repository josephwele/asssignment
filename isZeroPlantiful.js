function zeroPlentiful(arr){
  let count = 0
  let total = 0
  let foundNonZero = false
  for (let i = 0; i<arr.length;i++){
    if (arr[i] == 0){
      count++
    }
    else{
      if (count <= 4){
        return 0
      }
      count = 0
      total++
    }
  }

  if (count <= 4){
    return 0
  }

  if (foundNonZero == false){
    return total+1
  }
}


console.log(zeroPlentiful([0,0,0,0,0,1,0,0,0]))
