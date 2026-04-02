class Solution {
  /**
   * @param {character[]} tasks
   * @param {number} n
   * @return {number}
   */
  leastInterval(tasks, n) {
    let queue =[];
    let maxHeap = this.getHeap(tasks);
    let time=0;
    while(maxHeap.length !==0 || queue.length!==0 ){
       time+=1;
        if(maxHeap.length>0){
         let count = maxHeap.shift()-1;
          if(count >0){
            queue.push([count,time+n]);
           }
       }
       if(queue.length>0 && time === queue[0][1]){
         let val = queue.shift();
          maxHeap.push(val[0]);
          maxHeap.sort((a, b) => b - a);
      }
     }
     
    
    return time;
    
  }

  getHeap(tasks){
    let map={};
    for(const task of tasks){
      if(!map[task]){
        map[task] =1;
      }else{
        map[task] +=1;
      }
    }

    return Object.values(map).sort((a,b)=>b-a);

  }
}