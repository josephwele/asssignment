function length(n){
    let  len = 0
    while (n > 0){
      n = Math.floor(n / 10)
      len += 1
    }
    return len
  }
  
  
  function digitIncreasing(n){
    let len = length(n)
    let factor
    let sum
    let prevRes
    
    for (let i = 1; i < 10; i++){
      sum = i
      prevRes = i
      factor = 10
      for (let j = 1; j < len; j++){
        prevRes = (i * factor) + prevRes
        sum += prevRes
        factor *= 10
      }
      if (sum == n){
        return true
      }
    }
    
    return false
  }
  
  console.log(digitIncreasing(7))
  console.log(digitIncreasing(36))
  console.log(digitIncreasing(984))
  console.log(digitIncreasing(7404))
