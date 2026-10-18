
class Solution {
    findOrder(numCourses, prerequisites) {
        let graph = Array.from(
            { length: numCourses },
            () => []
        );

        let indegree = new Array(numCourses).fill(0);

        // Step 1: Graph banao
        for (let i = 0; i < prerequisites.length; i++) {
            let course = prerequisites[i][0];
            let prerequisite = prerequisites[i][1];

            graph[prerequisite].push(course);
            indegree[course]++;
        }

        // Step 2: Zero indegree courses queue mein daalo
        let queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        // Step 3: Topological Sort
        let index = 0;
        let order = [];

        while (index < queue.length) {
            let course = queue[index];
            index++;

            order.push(course);

            for (let nextCourse of graph[course]) {
                indegree[nextCourse]--;

                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        // Step 4: Cycle check
        if (order.length === numCourses) {
            return order;
        }

        return [];
    }
}
