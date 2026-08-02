class Solution {
    hasDuplicate(nums) {
        let myset = new Set();

        for (let num of nums) {
            if (myset.has(num)) {
                return true;
            }

            myset.add(num);
        }

        return false;
    }
}