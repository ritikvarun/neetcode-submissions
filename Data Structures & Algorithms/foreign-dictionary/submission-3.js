class Solution {
    foreignDictionary(words) {
        let graph = new Map();
        let indegree = new Map();

        for (let word of words) {
            for (let char of word) {
                if (!graph.has(char)) {
                    graph.set(char, []);
                    indegree.set(char, 0);
                }
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            let w1 = words[i];
            let w2 = words[i + 1];
            let minLen = Math.min(w1.length, w2.length);
            let found = false;

            for (let j = 0; j < minLen; j++) {
                let a = w1[j];
                let b = w2[j];

                if (a !== b) {
                    if (!graph.get(a).includes(b)) {
                        graph.get(a).push(b);
                        indegree.set(b, indegree.get(b) + 1);
                    }

                    found = true;
                    break;
                }
            }

            if (!found && w1.length > w2.length) {
                return "";
            }
        }

        let queue = [];

        for (let [char, degree] of indegree) {
            if (degree === 0) queue.push(char);
        }

        let order = "";

        while (queue.length > 0) {
            let char = queue.shift();
            order += char;

            for (let neighbor of graph.get(char)) {
                indegree.set(
                    neighbor,
                    indegree.get(neighbor) - 1
                );

                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return order.length === indegree.size ? order : "";
    }
}