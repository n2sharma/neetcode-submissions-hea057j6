class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();

        for (let i = 0; i < numCourses; i++){
            graph.set(i, []);
        }

        // build graph
        for (const [course, preReqCourse] of prerequisites){
            graph.get(preReqCourse).push(course);
        }

        const state = new Array(numCourses).fill(0);

        function dfs(course){
            if (state[course] === 1) return false;
            if (state[course] === 2) return true;

            state[course] = 1;

            for (const nextCourse of graph.get(course)){
                if(!dfs(nextCourse)) {
                    return false;
                }
            }

            state[course] = 2;

            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return false;
            }
        }

        return true;
    }
}
