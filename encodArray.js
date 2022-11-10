function encodArray(n){
    let result=n[0]-(n[1])+''
    for(let i=1; i<n.length-1; i++){
        let x=n[i]-n[i+1]
        if(x<0){
          x=-(x)
          //result+=x
        } 
      result+=x   
    
    }
    return result
  }
  console.log(encodArray([-4,5,-3,6,7,-4]))