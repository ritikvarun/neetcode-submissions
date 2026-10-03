class Solution {
    letterCombinations(digits) {
        if (digits.length === 0) {
            return [];
        }

        let map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        };

        let result = [];
        let current = [];

        const dfs = (index) => {
            // Ek complete combination ban gaya
            if (index === digits.length) {
                result.push(current.join(""));
                return;
            }

            let letters = map[digits[index]];

            for (let i = 0; i < letters.length; i++) {
                current.push(letters[i]);

                dfs(index + 1);

                current.pop();
            }
        };

        dfs(0);

        return result;
    }
}