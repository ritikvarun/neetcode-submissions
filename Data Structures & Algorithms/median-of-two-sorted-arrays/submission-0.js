class Solution {
    findMedianSortedArrays(nums1, nums2) {

        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let A = nums1;
        let B = nums2;

        let total = A.length + B.length;
        let half = Math.floor(total / 2);

        let left = 0;
        let right = A.length;

        while (true) {

            let i = Math.floor((left + right) / 2);
            let j = half - i;

            let Aleft = (i > 0) ? A[i - 1] : -Infinity;
            let Aright = (i < A.length) ? A[i] : Infinity;

            let Bleft = (j > 0) ? B[j - 1] : -Infinity;
            let Bright = (j < B.length) ? B[j] : Infinity;

            if (Aleft <= Bright && Bleft <= Aright) {

                if (total % 2) {
                    return Math.min(Aright, Bright);
                }

                return (
                    Math.max(Aleft, Bleft) +
                    Math.min(Aright, Bright)
                ) / 2;

            } else if (Aleft > Bright) {

                right = i - 1;

            } else {

                left = i + 1;

            }
        }
    }
}