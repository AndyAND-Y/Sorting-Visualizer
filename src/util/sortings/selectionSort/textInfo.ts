import { Text } from "@/types/Text";

const selectionSortText: Text = {
    paragraphs: [
        `Selection sort is a comparison-based sorting algorithm characterized by its in-place nature and quadratic time complexity. The algorithm iteratively divides the input array into two subarrays: the sorted portion and the unsorted portion. `,
        `Subsequently, the located minimum element is exchanged with the first element of the unsorted subarray, incrementally expanding the sorted subarray's boundary. This process is repeated until the entire array is sorted. `,
        `Despite its simplicity, selection sort's performance is limited by its O(n^2) time complexity, rendering it inefficient for large datasets due to its excessive number of comparisons and exchanges.`
    ]
}

export default selectionSortText;