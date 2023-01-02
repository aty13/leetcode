/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 1 || intervals.length > 10000) return intervals;    

    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let result = [];
    result.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {    
        if (isOverlapped(result[result.length - 1],intervals[i])) {
            console.log(`comparing ${result[result.length - 1]} and ${intervals[i]}`);
            console.log(`result is ${isOverlapped(result[result.length - 1],intervals[i])}`);
            result[result.length - 1] = mergeIntervals(result[result.length - 1], intervals[i]);
            console.log(`result changed to ${result}`);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}
//     if (intervals.length == 1 || intervals.length > 10000) return intervals;
//     intervals.sort((a, b) => a[0] - b[0]);
//     if (!containsOverlaps(intervals)) return intervals;

//     let result = mergeOneIteration(intervals);
    
//     let output = new Set();
//     result.forEach(item => output.add(item));
//     console.log('output');
//     console.log(output);
//     console.log(isOverlapped(output[0], output[1]));
//     console.log(containsOverlaps(output));

//     while (containsOverlaps(output)) {
//         console.log('output');
//         console.log(output);
//         output = merge(result);
//     } 
    
//     return result;
// };

// const mergeOneIteration = (input) => {
//         const buffResult = [];

//         for (let i = 1; i < input.length; i++) {
//             let buffIndex = i - 1;
//             if (isOverlapped(input[i - 1], input[i])) {
//                 let merged = mergeIntervals(input[i - 1], input[i]);

//                 if (buffResult[buffIndex]) {
//                     if (isOverlapped(buffResult[buffIndex], merged)) {
//                         buffResult[buffIndex] = mergeIntervals(buffResult[buffIndex], merged);
                        
//                     }
//                 } else {
//                     buffResult.push(merged);
//                 }
//             } else {
//                 if (i == 1) buffResult.push(input[0]);
//                 buffResult.push(input[i]);
//             }
//         }

//         return buffResult;
//     }

// const containsOverlaps = (input) => {
//     for (let i = 1; i < input.length; i++) {
//         if (isOverlapped(input[i - 1], input[i])) {
//             return true;
//         }
//     }

//     return false;
// }

const isOverlapped = (interval1, interval2) => {
    if (interval1 == interval2) return true;

    if (interval1[0] <= interval2[0] && interval1[1] >= interval2[0]) return true;

    return false;
}

const mergeIntervals = (interval1, interval2) => {
    console.log('interval1');
    console.log(interval1)
    console.log('interval2');
    console.log(interval2)
    let start = 0;
    // Math.max(interval1[0], interval2[0]);
    let end = 0;
    // Math.max(interval1[1], interval2[1]);;

    if (interval1[0] > interval2[0]) {
        console.log(`interval[0] more than interval2 ${interval1[1]} ${interval2[1]}`)
        start = interval2[0];
    } else {
        console.log(`interval1[0] NOT more than interval2 ${interval1[1]} ${interval2[1]}`)
        start = interval1[0];
    }

    if (interval1[1] > interval2[1]) {
        console.log(`interval[1] more than interval2 ${interval1[1]} ${interval2[1]}`)
        end = interval1[1];
    } else {
        console.log(`interval[1] NOT more than interval2 ${interval1[1]} ${interval2[1]}`)
        end = interval2[1];
    }

    return [start, end];
}