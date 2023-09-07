import { ProgrammingLanguageType } from "@/types/Languages";

const codeExampleInsertionSort: { [k in ProgrammingLanguageType]: string } = {
    typescript: `
  function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; ++i) {
      for (let j = i; j > 0; j--) {
        if (arr[j - 1] > arr[j]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        } else {
          break;
        }
      }
    }
  }
  `,
    javascript: `
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; ++i) {
      for (let j = i; j > 0; j--) {
        if (arr[j - 1] > arr[j]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        } else {
          break;
        }
      }
    }
  }
  `,
    python: `
  def insertion_sort(arr):
      for i in range(1, len(arr)):
          j = i
          while j > 0 and arr[j - 1] > arr[j]:
              arr[j], arr[j - 1] = arr[j - 1], arr[j]
              j -= 1
  `,
    cpp: `
  void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; ++i) {
      for (int j = i; j > 0; --j) {
        if (arr[j - 1] > arr[j]) {
          std::swap(arr[j - 1], arr[j]);
        } else {
          break;
        }
      }
    }
  }
  `,
    c: `
  void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; ++i) {
      for (int j = i; j > 0; --j) {
        if (arr[j - 1] > arr[j]) {
          int temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        } else {
          break;
        }
      }
    }
  }
  `,
    java: `
  public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; ++i) {
      for (int j = i; j > 0; --j) {
        if (arr[j - 1] > arr[j]) {
          int temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        } else {
          break;
        }
      }
    }
  }
  `,
    csharp: `
  public static void InsertionSort(int[] arr) {
    for (int i = 1; i < arr.Length; ++i) {
      for (int j = i; j > 0; --j) {
        if (arr[j - 1] > arr[j]) {
          int temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        } else {
          break;
        }
      }
    }
  }
  `,
    rust: `
  fn insertion_sort(arr: &mut [i32]) {
    let n = arr.len();
    for i in 1..n {
      let mut j = i;
      while j > 0 && arr[j - 1] > arr[j] {
        arr.swap(j, j - 1);
        j -= 1;
      }
    }
  }
  `,
};

export default codeExampleInsertionSort;