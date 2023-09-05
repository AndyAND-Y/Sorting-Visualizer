import { Text } from "@/types/Text"

const quickSortText: Text = {
    paragraphs: [
        `QuickSort is a highly efficient and widely used sorting algorithm in computer science. It falls under the category of comparison-based sorting algorithms and is known for its average-case time complexity of O(nlogn). The algorithm was developed by Tony Hoare in 1960 and is based on the divide-and-conquer strategy.`,
        `In the first phase of QuickSort, called the partitioning step, the algorithm selects a pivot element from the input array and rearranges the elements so that all elements smaller than the pivot are on its left, and all elements greater than the pivot are on its right. This partitioning process can be achieved using various techniques, with the choice of pivot greatly influencing the algorithm's performance. Common pivot selection methods include choosing the first, last, or middle element of the array. Once the pivot is in its correct position, the array is effectively divided into two sub-arrays.`,
        `The second phase of QuickSort involves recursively applying the partitioning process to the two sub-arrays created in the previous step. This recursive process continues until the entire array is sorted. QuickSort's efficiency stems from its ability to divide the problem into smaller sub-problems and solve them independently. However, its worst-case time complexity is O(n^2) when poorly chosen pivots consistently result in highly unbalanced partitions. To mitigate this, randomized pivot selection or median-of-three pivot strategies are often employed, ensuring more balanced partitions and maintaining the average-case performance at O(nlogn).`,
    ]
}

export default quickSortText;