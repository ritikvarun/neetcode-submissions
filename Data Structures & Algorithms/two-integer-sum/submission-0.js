class Solution {
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let complement = target - num;

            if (map[complement] !== undefined) {
                return [map[complement], i];
            }

            map[num] = i;
        }
    }
}