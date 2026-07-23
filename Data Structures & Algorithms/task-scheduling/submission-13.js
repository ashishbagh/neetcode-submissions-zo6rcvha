class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        
        const freq = new Map();

  for (const task of tasks) {
    freq.set(task, (freq.get(task) || 0) + 1);
  }

  let maxFreq = 0;
  for (const count of freq.values()) {
    maxFreq = Math.max(maxFreq, count);
  }

  let countMax = 0;
  for (const count of freq.values()) {
    if (count === maxFreq) countMax++;
  }

  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + countMax);


    }


    
}
