class TimeMap {
    constructor() {
        this.map = {};
    }

    set(key, value, timestamp) {
        if (!this.map[key]) {
            this.map[key] = [];
        }

        this.map[key].push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.map[key]) {
            return "";
        }

        let values = this.map[key];

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
