
class Solution {
    canFinish(numCourses, prerequisites) {
        let graph = Array.from(
            { length: numCourses },
            () => []
        );

        let indegree = new Array(numCourses).fill(0);

        // Step 1: Graph aur indegree banao
        for (let i = 0; i < prerequisites.length; i++) {
            let course = prerequisites[i][0];
            let prerequisite = prerequisites[i][1];

            graph[prerequisite].push(course);
            indegree[course]++;
        }

        // Step 2: Jinke prerequisites 0 hain, unhe queue mein daalo
        let queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        // Step 3: BFS / Kahn's Algorithm
        let index = 0;
        let completed = 0;

        while (index < queue.length) {
            let course = queue[index];
            index++;

            completed++;

            for (let nextCourse of graph[course]) {
                indegree[nextCourse]--;

                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        // Saare courses complete hue?
        return completed === numCourses;
    }
}
