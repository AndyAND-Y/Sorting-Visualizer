import { Text } from "@/types/Text";

const insertionSortText: Text = {
    paragraphs: [
        `Insertion sort is a simple but effective sorting algorithm used to arrange elements in a particular order, typically ascending or descending. It works by dividing the input list into two sections: the sorted and unsorted parts. Initially, the sorted section contains only the first element, while the unsorted section includes the rest of the elements. The algorithm then iterates through the unsorted section one element at a time, finding the correct position for each element within the sorted section.`,
        `In the first iteration, insertion sort takes the second element from the unsorted section and compares it to the first element in the sorted section. If the second element is smaller, it is moved to the left of the first element. This process continues as the algorithm progresses through the unsorted section, with each element being inserted into its correct position within the sorted section. At the end of each iteration, the sorted section grows by one element, and the unsorted section shrinks by one element. This process continues until the entire list is sorted.`,
        `One of the key advantages of insertion sort is its simplicity and efficiency for small input sizes or partially sorted lists. It has a time complexity of O(n^2) in the worst case, making it less suitable for large datasets when compared to more advanced sorting algorithms like quicksort or mergesort. However, its ability to efficiently handle nearly sorted data and its low overhead make it a valuable choice in some specific scenarios. In summary, insertion sort is a straightforward algorithm that builds a sorted list by repeatedly inserting one element at a time into the correct position within the sorted section, making it a practical choice for smaller datasets and nearly sorted lists.`,
    ]
}

export default insertionSortText;