function isZeroPlantiful (arr){
      let count = 0
      for(i=0;i<arr.length;i++){
                  
       
        if(arr[i]==0){
         
          
           count+=arr[i]
           
          count ++ 
        } 
      
        if(count>=4){
          return 1
        } 
        
       
      } 
      
      return 0
        
      }
    console.log(isZeroPlantiful([0,0,0,0,0,1,]))