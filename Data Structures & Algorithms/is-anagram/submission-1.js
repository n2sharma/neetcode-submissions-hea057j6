class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let freqMapOfS = {}
        let freqMapOfT = {}
        for(let i = 0; i < s.length; i++) {
            let char = s[i];
            freqMapOfS[char] = (freqMapOfS[char] || 0) + 1;
        }

        for(let i = 0; i < t.length; i++) {
            let char = t[i];
            freqMapOfT[char] = (freqMapOfT[char] || 0) + 1;
        }

        console.log(freqMapOfS)

        for (const key in freqMapOfS){
            if (freqMapOfS[key] !== freqMapOfT[key]) return false;
        }

        return true;
    }
}
