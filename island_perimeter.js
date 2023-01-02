/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result = 0;
    let visited = [];
    
    const countPerimeters = (x, y) => {
        let count = 0;
        if (x - 1 < 0 || grid[x - 1][y] === 0) count++;
        if (x + 1 >= grid.length || grid[x + 1][y] === 0) count++;
        if (y - 1 < 0 || grid[x][y -1] === 0) count++;
        if (y + 1 >= grid[x].length || grid[x][y + 1] === 0) count++;
            
        return count;
    } 
        
    for (let i = 0; i < grid.length; i++) {
        for (let y = 0; y < grid[i].length; y++) {
            if (grid[i][y]) {
                result += countPerimeters(i, y);
            }            
        }   
    }

    return result;
};