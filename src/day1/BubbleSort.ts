/**
 * Pseudocode
 *
 * We have an array of n elements
 *
 * loop through the array from i to n, where i is the starting index
 * [1,8,4,2,7,3]
 * inner loop should loop  through the array from j to (n - 1 - i)
 * // handle conditions => is array of i less than array of j? swap i and j
 */

export default function bubble_sort(arr: number[]): void {
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength - 1 - i; j++) {
            // handle the swap
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
