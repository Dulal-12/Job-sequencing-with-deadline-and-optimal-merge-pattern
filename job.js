
const jobArrange = (arr,t) => {
     
           //using sorting formula and reverse
            const length = arr.length;

            for (var i = 1 ; i < length; i++){
              var  item = arr[i];
              var j = i-1;
              while (j>=0 && arr[j].profit > item.profit){
                  arr[j+1] = arr[j];
                  j = j-1;
                  arr[j+1] = item;
              }
            }
           arr = arr.reverse();
        


         //for timeSlot using maximum time which is "t"
          const timeSlot = [];
          for (var i = 0; i  < t ; i++){
              timeSlot.push(i);
             }
          
          //jobslot and new timeSlot
          var timeSlot1 = [];
          var jobList = []
          var s = 2;


          //find job suitable job
          for ( var i = 0; i < length ;i++){
              
            if ( i>0 && (arr[i].time === arr[i-1].time))
            {
                time = arr[i].time - s;

                s++;
                if(timeSlot1.indexOf(time) == -1 && time >-1){  
                      //if indexOf !==-1 'mean value is exit so reject this'
                    timeSlot1.push(time);

                    jobList.push(arr[i].job);

                    if(timeSlot1.length == timeSlot.length){
                        break;
                    }  }    }

            else{
                time = arr[i].time - 1;

                 if(timeSlot1.indexOf(time) == -1 && time>-1){  //if indexOf !==-1 'mean value is exit so reject this'

                    timeSlot1.push(time);

                    jobList.push(arr[i].job);

                    if(timeSlot1.length == timeSlot.length){
                        break;
                    } } }

          }
          console.log(jobList);
          
          }


const arr = [ {job:'a',profit:100,time:1},
                    {job:'b',profit:60,time:2}, 
                    {job:'c',profit:40,time:2},
                    {job:'d',profit:20,time:3} ,
                    {job:'e',profit:20,time:1} ];

jobArrange(arr,3)