class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        // Detect cycle
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        // Find duplicate
        slow = nums[0];

        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}