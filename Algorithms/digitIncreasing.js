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
      sum = i // 2
      prevRes = i // 2
      factor = 10
      for (let j = 1; j < len; j++){
        prevRes = (i * factor) + prevRes // 111 = 1*100 + 11
        sum += prevRes // 12 + 111 = 122
        factor *= 10  // 1000
      }
      if (sum == n){
        return true
      }
    }
    
    return false
  }
  // 2, 2*10 + 2, 2*100 + 22, 2*1000 + 222
  
  console.log(digitIncreasing(7))
  console.log(digitIncreasing(36))
  console.log(digitIncreasing(984))
  console.log(digitIncreasing(7404))
