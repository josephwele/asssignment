function integerOf(arr) {
    let  result=[]
     for(let i=0; i<arr.length;i++){
       if(i>=0){
        result.push(-(arr[i]-(arr[i+1])))
       }
       
     }
     return result
   }
   console.log(integerOf([-1,5,8,17,15]))