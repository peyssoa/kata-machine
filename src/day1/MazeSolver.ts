const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // base case - off the map
    if (
        curr.x < 0 ||
        curr.x >= maze.length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // base case - on a wall
    if (maze[curr.x][curr.y] === wall) {
        return false;
    }

    // base case - at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // base case - already seen
    if (seen[curr.x][curr.y]) {
        return false;
    }

    seen[curr.x][curr.y] = true;
    path.push(curr);

    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
