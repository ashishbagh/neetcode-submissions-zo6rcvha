class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        const events = [];

  for (const [numPassengers, from, to] of trips) {
    events.push([from, numPassengers]);   // pickup
    events.push([to, -numPassengers]);    // drop
  }

   events.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // drop first
    return a[0] - b[0];
  });


  let currentPassengers = 0;

  for (const [_, change] of events) {
    currentPassengers += change;
    if (currentPassengers > capacity) return false;
  }

  return true;
    }
}
