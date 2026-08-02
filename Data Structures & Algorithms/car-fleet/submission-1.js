class Solution {
    carFleet(target, position, speed) {
        let cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        cars.sort((a, b) => b[0] - a[0]);

        let stack = [];

        for (let [pos, spd] of cars) {
            let time = (target - pos) / spd;

            stack.push(time);

            if (
                stack.length >= 2 &&
                stack[stack.length - 1] <= stack[stack.length - 2]
            ) {
                stack.pop();
            }
        }

        return stack.length;
    }
}