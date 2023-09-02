export type Complexities = {
    worstCase: Complexity,
    averageCase: Complexity,
    auxiliarySpace: Complexity,
}

export type Complexity = "O(n)" | "O(1)" | "O(n^2)" | "O(nlogn)";