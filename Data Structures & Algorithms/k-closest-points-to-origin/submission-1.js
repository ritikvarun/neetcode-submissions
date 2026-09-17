class Solution {
    kClosest(points, k) {
        points.sort((a, b) => {
            const d1 = a[0] * a[0] + a[1] * a[1];
            const d2 = b[0] * b[0] + b[1] * b[1];
            return d1 - d2;
        });

        return points.slice(0, k);
    }
}