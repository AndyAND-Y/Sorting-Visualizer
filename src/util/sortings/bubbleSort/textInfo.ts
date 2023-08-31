const bubbleSortText: string = `Bubble Sort is a simple comparison-based sorting algorithm that operates by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items, and swapping them if they are in the wrong order. It derives its name from the way smaller elements "bubble" to the top of the list while larger elements "sink" to the bottom. This algorithm has a worst-case and average-case time complexity of O(n^2), where 'n' represents the number of elements in the list, making it highly inefficient for large datasets.

Bubble Sort's inherent inefficiency stems from its repeated scanning and swapping of adjacent elements, even when the list is nearly sorted. It lacks adaptability and doesn't take advantage of pre-existing order. Additionally, its stability – the preservation of the relative order of equal elements – is assured due to the strict nature of pairwise comparisons and swaps.

Despite its inefficiencies, Bubble Sort can be useful in educational contexts to illustrate the concept of sorting algorithms, and it can perform reasonably well for very small datasets or datasets that are nearly sorted. However, for practical purposes and larger datasets, more efficient sorting algorithms like Merge Sort or Quick Sort are preferred choices.`


export default bubbleSortText;
