class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = new Map();
        for(const task of tasks){
            map.set(task,(map.get(task)||0) + 1);
        }

       const sortedEntries= [...map.values()].sort((a, b) => b - a);
       let queue=[];
       let time=0;
       while(sortedEntries.length !==0 || queue.length !==0){
        time++;
        if(sortedEntries.length>0){
            let task = sortedEntries.shift();
            task--;
            if(task>0){
                queue.push([task,time+n]);
            }
        }

        if(queue.length>0 && time===queue[0][1]){
            
            sortedEntries.push(queue.shift()[0]);
            sortedEntries.sort((a,b)=>b-a);
        }

       }
        return time;


    }


    
}
