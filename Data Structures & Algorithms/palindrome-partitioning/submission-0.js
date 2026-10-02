class Solution {
    partition(s) {
        let result = [];
        let current = [];

        const isPalindrome = (str) => {
            let left = 0;
            let right = str.length - 1;

            while (left < right) {
                if (str[left] !== str[right]) {
                    return false;
                }

                left++;
                right--;
            }

            return true;
        };

        const dfs = (start) => {
            // Complete string partition ho gayi
            if (start === s.length) {
                result.push([...current]);
                return;
            }

            for (let end = start; end < s.length; end++) {
                let substring = s.slice(start, end + 1);

                if (!isPalindrome(substring)) {
                    continue;
                }

                current.push(substring);

                dfs(end + 1);

                current.pop();
            }
        };

        dfs(0);

        return result;
    }
}