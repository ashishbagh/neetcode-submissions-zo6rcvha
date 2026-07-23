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
        const entries = [...map.values()].sort((a,b)=>b-a);
        let time=0;
        let queue=[];

        while(entries.length !==0 || queue.length !==0){
            time++;
            if(entries.length>0){
                let task = entries.shift();
                task--;
                if(task>0) queue.push([time+n,task]);
            }
            if(queue.length>0 && queue[0][0]=== time){  
                entries.push(queue.shift()[1]);
                entries.sort((a,b)=>b-a);
            }
        }
        return time;
    }


    
}
