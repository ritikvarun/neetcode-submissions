class Solution {
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            while (
                stack.length > 0 &&
                stack[stack.length - 1][1] > heights[i]
            ) {
                let [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }

            stack.push([start, heights[i]]);
        }

        while (stack.length > 0) {
            let [index, height] = stack.pop();
            maxArea = Math.max(
                maxArea,
                height * (heights.length - index)
            );
        }

        return maxArea;
    }
}