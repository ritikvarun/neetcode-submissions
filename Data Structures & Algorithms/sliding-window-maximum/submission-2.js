class Solution {
    maxSlidingWindow(nums, k) {
        let deque = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {

            // Remove indices outside window
            if (deque.length && deque[0] < i - k + 1) {
                deque.shift();
            }

            // Remove smaller elements from back
            while (
                deque.length &&
                nums[deque[deque.length - 1]] < nums[i]
            ) {
                deque.pop();
            }

            deque.push(i);

            // Window complete
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}