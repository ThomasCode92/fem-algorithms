function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    // base case
    if (curr === needle) {
        path.push(curr);
        return true;
    }

    if (seen[curr]) {
        return false;
    }

    // recurse case
    // pre
    seen[curr] = true;
    path.push(curr);

    // recurse
    const list = graph[curr];
    for (let i = 0; i < list.length; ++i) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    //post
    path.pop();

    return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path) ? path : null;

    if (path.length === 0) return null;

    return path;
}
