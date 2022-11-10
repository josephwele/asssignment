function squenceOfZero(n){
    let zeros=0
    let result=0
    for(let i=0; i<n.length; i++){
      if(n[i]===0){
        zeros++
        if( zeros===4){
          result++
           zeros =0   
        }
      }
    }
    return result
  }
  console.log(squenceOfZero([0,0,0,0,7,8,0,0,0,0]))