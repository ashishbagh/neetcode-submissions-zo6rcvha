class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t.length > s.length) return "";

    // Count required characters
    const need = new Map();
    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    const window = new Map();
    let have = 0;
    const required = need.size;  // Unique chars needed
    
    let result = "";
    let minLen = Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // Expand window - add s[right]
        const c = s[right];
        window.set(c, (window.get(c) || 0) + 1);

        // Check if this char satisfies its requirement
        if (need.has(c) && window.get(c) === need.get(c)) {
            have++;
        }

        // Shrink window from left while valid
        while (have === required) {
            // Update result if smaller
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                result = s.substring(left, right + 1);
            }

            // Remove s[left] from window
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);
            
            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                have--;
            }
            left++;
        }
    }

    return result;
}
}
