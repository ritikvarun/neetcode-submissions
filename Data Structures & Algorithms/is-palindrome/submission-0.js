class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length - 1;

        while (left < right) {

            // Left side se sirf letter/number lo
            while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
                left++;
            }

            // Right side se sirf letter/number lo
            while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
                right--;
            }

            // Lowercase compare karo
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}