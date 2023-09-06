import { Text } from "@/types/Text";

const heapSortText: Text = {
    paragraphs:
        [
            `HeapSort is a highly efficient comparison-based sorting algorithm that falls under the category of in-place sorting methods. It leverages a data structure called a binary heap to sort an array of elements. The key idea behind HeapSort is to first build a max-heap from the input array and then repeatedly extract the maximum element and place it at the end of the array. This process is repeated until the entire array is sorted.`,
            `To build a max-heap, HeapSort starts by transforming the input array into a binary heap. It begins with the last non-leaf node (i.e., the parent of the last element) and move down each node to ensure that the max-heap property is maintained, which means that each parent node must be greater than or equal to its child nodes. Once the max-heap is constructed, the largest element (located at the root) is swapped with the last element of the heap. After the swap, the heap size is reduced by one, and the process is repeated on the remaining elements. This guarantees that the largest elements "sink" to the end of the array, effectively sorting the data.`,
            `HeapSort's key advantages include its efficient O(nlogn) time complexity, which makes it suitable for large datasets, and its in-place sorting, requiring only a constant amount of additional memory. However, it is worth noting that HeapSort is not as stable as some other sorting algorithms, and its performance can degrade when dealing with nearly sorted input data due to the lack of adaptiveness. Nevertheless, HeapSort's ability to sort data efficiently in-place with a well-defined worst-case time complexity makes it a valuable sorting algorithm in various applications.`,
        ]
}

export default heapSortText;