/**
 * Pseudocode:
 *
 * while lo is less than hi
 * midpoint = floor(lo + (hi-lo)/2)
 *
 * currentValue = haystack[midpoint]
 *
 * is currentValue equal to needle? return true
 * is currentValue less than needle? lo = midpoint + 1
 * is currentValue greater than needle? hi = midpoint
 *
 */

// [2,3,5,9,10]

// n = 9
// ------
// 0 + (4-0)/2
// m = 2
// cV = 5

// ------
// 0 + (2-0)/2
// m = 1
// cV = 3

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const currentValue = haystack[midpoint];

        if (currentValue === needle) {
            return true;
        } else if (currentValue > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);

    return false;
}
