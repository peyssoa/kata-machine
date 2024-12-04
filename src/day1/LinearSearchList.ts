export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let resultFound = false;
    let haystackIndex = 0;

    do {
        if (haystack[haystackIndex] === needle) resultFound = true;

        haystackIndex++;
    } while (!resultFound && haystackIndex < haystack.length);

    return resultFound;
}
