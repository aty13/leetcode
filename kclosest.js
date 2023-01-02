/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    let distances = [];
    const result = [];
    for (let i = 0; i < points.length; i++) {
        distances.push([getDistanceFromOrigin(points[i]), points[i]]);
    } 

   distances.sort(function(a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });

    console.log(distances);
    for (let i = 0; i < k; i++) result.push(distances[i][1]);

    return result;
};

const getDistanceFromOrigin = function (point) {
    return Math.hypot(point[0]-0, point[1]-0);
}

const areSorted = array => {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array) {
            return false;
        }
    }
    return true;
}