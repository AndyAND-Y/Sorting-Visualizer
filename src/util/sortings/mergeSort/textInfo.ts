import { Text } from "@/types/Text";

const x = `Merge Sort is a comparison-based sorting algorithm characterized by its divide-and-conquer methodology.

It operates on an array by recursively dividing it into two equal halves until the base case of single-element subarrays is reached. 

Subsequently, these subarrays are reassembled in sorted order through a merging process. 

The algorithm achieves this by employing an auxiliary array to efficiently combine the divided segments, minimizing the time complexity incurred during the merge phase. 

Merge Sort guarantees a time complexity of O(nlogn) due to its balanced partitioning and consistent two-phase execution, ensuring reliable performance even for large datasets. Despite its efficient time complexity, the algorithm's space complexity of O(n) for the auxiliary array can render it less optimal in memory-constrained environments.`

const mergeSortText: Text = {
    paragraphs: [
        `Merge Sort is a comparison-based sorting algorithm characterized by its divide-and-conquer methodology. It operates on an array by recursively dividing it into two equal halves until the base case of single-element subarrays is reached. Subsequently, these subarrays are reassembled in sorted order through a merging process. `,
        `The algorithm achieves this by employing an auxiliary array to efficiently combine the divided segments, minimizing the time complexity incurred during the merge phase. Merge Sort guarantees a time complexity of O(nlogn) due to its balanced partitioning and consistent two-phase execution, ensuring reliable performance even for large datasets. `,
        `Despite its efficient time complexity, the algorithm's space complexity of O(n) for the auxiliary array can render it less optimal in memory-constrained environments.`
    ]
}

export default mergeSortText;