class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let p1 = 0;
        let p2 = clean.length-1;
        while(p1 < p2){
            if (clean[p1] !== clean[p2]) return false;
            p1++;
            p2--;
        }
        return true;
    }
}
