function isZerosplentiful (arr){
    let x = 0
    let z = 0
  for (let i  = 0; i<arr.length;i++ ){
    if (arr[i]==0){
      x ++
      if (x==4){
        z++
        x=0
      }
        
    }else {
      x = 0
    }
      
  }
    return z
    
  }
  console.log(isZerosplentiful([0,0,0,0,5,9,8,0]))