class Solution {

    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let res = "";

        for (let str of strs) {
            res += str.length + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @return {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // '#' tak jao
            while (str[j] !== "#") {
                j++;
            }

            // length nikalo
            let len = Number(str.substring(i, j));

            // word nikalo
            let word = str.substring(j + 1, j + 1 + len);

            res.push(word);

            // next word par jao
            i = j + 1 + len;
        }

        return res;
    }
}