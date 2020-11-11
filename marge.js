const mergeSort = (array) =>{

    if(array.length<=1){
       return array
    }
   
        
           const mid = Math.floor(array.length*0.5);
           const left = array.slice(0,mid);
            const right = array.slice(mid);
           return merge(mergeSort(left),mergeSort(right));
         
}



 const merge = (left,right)=>{

   const newArray = [];

    while(left.length && right.length){
       if(left[0]<=right[0]){
       newArray.push(left.shift());
       }

       else{
         newArray.push(right.shift());
        }

    }
    return newArray.concat(left,right);
 }


 

const arrayElementSort = (arrayList)=>{
    //sort here using array length
    const length = arrayList.length;
    for (var i = 1 ; i<length;i++){
      var  item = arrayList[i];
      var j = i-1;
      while (j>=0 && arrayList[j].length>item.length){
          arrayList[j+1] = arrayList[j];
          j = j-1;
          arrayList[j+1] = item;
      }
    }
   
//then merge and countValue
       var costValue = 0;

       for (var i = 1; i < length; i=i+1){
          if(i==1){
            const mergeArray = [...arrayList[i], ...arrayList[i-1]];
            var result = mergeSort(mergeArray);
            costValue += result.length;
          
          }
          else{
            const mergeArray = [...arrayList[i], ...result];
            var result = mergeSort(mergeArray);
            costValue += result.length;
          
          }
         
       }
       console.log('final array = ',result);
       console.log('costValue = ', costValue)

}




 const arrayList = [[1,3,0,7,8,9,0] , [3,5,6,1,2,0],[11,23,45,34],[2,90,33]];

 arrayElementSort(arrayList);



