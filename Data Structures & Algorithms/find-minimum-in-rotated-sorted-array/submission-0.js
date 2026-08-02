class Solution {
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let answer = nums[0];

        while (left <= right) {

            // Current part is already sorted
            if (nums[left] <= nums[right]) {
                answer = Math.min(answer, nums[left]);
                break;
            }

            let mid = Math.floor((left + right) / 2);

            answer = Math.min(answer, nums[mid]);

            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }
}