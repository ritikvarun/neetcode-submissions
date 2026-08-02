class Solution {
  minWindow(s, t) {
    if (t.length > s.length) return "";

    let need = {};
    for (let ch of t) {
        need[ch] = (need[ch] || 0) + 1;
    }

    let have = {};
    let required = Object.keys(need).length;
    let formed = 0;

    let l = 0;
    let result = [-1, -1];
    let minLen = Infinity;

    for (let r = 0; r < s.length; r++) {
        let ch = s[r];
        have[ch] = (have[ch] || 0) + 1;

        if (need[ch] && have[ch] === need[ch]) {
            formed++;
        }

        while (formed === required) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                result = [l, r];
            }

            let leftChar = s[l];
            have[leftChar]--;

            if (need[leftChar] && have[leftChar] < need[leftChar]) {
                formed--;
            }

            l++;
        }
    }

    return minLen === Infinity ? "" : s.slice(result[0], result[1] + 1);
}
}
