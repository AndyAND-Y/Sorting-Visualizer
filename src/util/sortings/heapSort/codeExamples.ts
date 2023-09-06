import { ProgrammingLanguageType } from "@/types/Languages"

const codeExampleHeapSort: { [k in ProgrammingLanguageType]: string } = {

    typescript: `
function heapSort(arr: number[]) {
    heapSortHelper(arr);
}

function heapSortHelper(arr: number[]) {

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
        heapify(arr, arr.length, i);
    }

    for (let i = arr.length - 1; i > 0; --i) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

}

function heapify(arr: number[], size: number, index: number) {

    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, size, largest);
    }

}
`,
    javascript: `
function heapSort(arr) {
    heapSortHelper(arr);
}

function heapSortHelper(arr) {

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
        heapify(arr, arr.length, i);
    }

    for (let i = arr.length - 1; i > 0; --i) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

}

function heapify(arr, size, index) {

    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, size, largest);
    }

}
`,
    python: `
def heap_sort(arr):
    heap_sort_helper(arr)

def heap_sort_helper(arr):

    for i in range(len(arr)//2 - 1, -1, -1):
        heapify(arr, len(arr), i)

    for i in range(len(arr) - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)

def heapify(arr, size, index):

    largest = index
    left = 2 * index + 1
    right = 2 * index + 2

    if left < size and arr[left] > arr[largest]:
        largest = left
    if right < size and arr[right] > arr[largest]:
        largest = right

    if largest != index:
        arr[index], arr[largest] = arr[largest], arr[index]
        heapify(arr, size, largest)
`,
    cpp: `
void heapify(int arr[], int size, int index) {
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != index) {
        std::swap(arr[index], arr[largest]);
        heapify(arr, size, largest);
    }
}

void heapSort(int arr[], int size) {
    for (int i = size / 2 - 1; i >= 0; --i) {
        heapify(arr, size, i);
    }

    for (int i = size - 1; i > 0; --i) {
        std::swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

`,
    c: `
void heapify(int arr[], int size, int index) {
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != index) {
        int temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;
        heapify(arr, size, largest);
    }
}

void heapSort(int arr[], int size) {
    for (int i = size / 2 - 1; i >= 0; --i) {
        heapify(arr, size, i);
    }

    for (int i = size - 1; i > 0; --i) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

`,
    java: `
public class HeapSort {

    public static void heapSort(int arr[]) {
        heapSortHelper(arr);
    }

    public static void heapSortHelper(int arr[]) {

        for (int i = arr.length / 2 - 1; i >= 0; --i) {
            heapify(arr, arr.length, i);
        }

        for (int i = arr.length - 1; i > 0; --i) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
    }

    public static void heapify(int arr[], int size, int index) {

        int largest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;

        if (left < size && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < size && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != index) {
            int temp = arr[index];
            arr[index] = arr[largest];
            arr[largest] = temp;
            heapify(arr, size, largest);
        }
    }

    public static void main(String[] args) {
        int arr[] = {12, 11, 13, 5, 6, 7};
        int size = arr.length;

        heapSort(arr);

        System.out.print("Sorted array: ");
        for (int i = 0; i < size; ++i) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}
`,
    csharp: `
class HeapSort {

    public static void HeapSortFunc(int[] arr) {
        HeapSortHelper(arr);
    }

    public static void HeapSortHelper(int[] arr) {

        for (int i = arr.Length / 2 - 1; i >= 0; --i) {
            Heapify(arr, arr.Length, i);
        }

        for (int i = arr.Length - 1; i > 0; --i) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            Heapify(arr, i, 0);
        }
    }

    public static void Heapify(int[] arr, int size, int index) {

        int largest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;

        if (left < size && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < size && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != index) {
            int temp = arr[index];
            arr[index] = arr[largest];
            arr[largest] = temp;
            Heapify(arr, size, largest);
        }
    }
}
`,
    rust: `
fn heap_sort(arr: &mut [i32]) {
    heap_sort_helper(arr);
}

fn heap_sort_helper(arr: &mut [i32]) {
    let size = arr.len();

    for i in (0..size / 2).rev() {
        heapify(arr, size, i);
    }

    for i in (1..size).rev() {
        arr.swap(0, i);
        heapify(arr, i, 0);
    }
}

fn heapify(arr: &mut [i32], size: usize, index: usize) {
    let mut largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if left < size && arr[left] > arr[largest] {
        largest = left;
    }
    if right < size && arr[right] > arr[largest] {
        largest = right;
    }

    if largest != index {
        arr.swap(index, largest);
        heapify(arr, size, largest);
    }
}
`
};

export default codeExampleHeapSort;