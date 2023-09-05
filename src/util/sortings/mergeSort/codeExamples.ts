import { ProgrammingLanguageType } from "@/types/Languages";

const codeExampleMergeSort: { [k in ProgrammingLanguageType]: string } = {
    typescript: `
  function mergeSort(arr: number[]) {
    const tmp = [...arr];
  
    mergeSortHelper(arr, 0, arr.length - 1, tmp);
  }
  
  function mergeSortHelper(arr: number[], start: number, end: number, tmp: number[]) {
    if (start === end) {
      return;
    }
  
    const mid = Math.floor((start + end) / 2);
  
    mergeSortHelper(arr, start, mid, tmp);
    mergeSortHelper(arr, mid + 1, end, tmp);
  
    mergeSortMerger(arr, start, mid, end, tmp);
  }
  
  function mergeSortMerger(arr: number[], start: number, mid: number, end: number, tmp: number[]) {
    let i = start;
    let j = mid + 1;
    let k = start;
  
    while (i <= mid && j <= end) {
      if (arr[i] < arr[j]) {
        tmp[k] = arr[i];
        i++;
        k++;
      } else {
        tmp[k] = arr[j];
        j++;
        k++;
      }
    }
  
    while (i <= mid) {
      tmp[k] = arr[i];
      i++;
      k++;
    }
  
    while (j <= end) {
      tmp[k] = arr[j];
      j++;
      k++;
    }
  
    for (let k = start; k <= end; ++k) {
      arr[k] = tmp[k];
    }
  }
    `,

    javascript: `
  function mergeSort(arr) {
    const tmp = [...arr];
  
    mergeSortHelper(arr, 0, arr.length - 1, tmp);
  }
  
  function mergeSortHelper(arr, start, end, tmp) {
    if (start === end) {
      return;
    }
  
    const mid = Math.floor((start + end) / 2);
  
    mergeSortHelper(arr, start, mid, tmp);
    mergeSortHelper(arr, mid + 1, end, tmp);
  
    mergeSortMerger(arr, start, mid, end, tmp);
  }
  
  function mergeSortMerger(arr, start, mid, end, tmp) {
    let i = start;
    let j = mid + 1;
    let k = start;
  
    while (i <= mid && j <= end) {
      if (arr[i] < arr[j]) {
        tmp[k] = arr[i];
        i++;
        k++;
      } else {
        tmp[k] = arr[j];
        j++;
        k++;
      }
    }
  
    while (i <= mid) {
      tmp[k] = arr[i];
      i++;
      k++;
    }
  
    while (j <= end) {
      tmp[k] = arr[j];
      j++;
      k++;
    }
  
    for (let k = start; k <= end; ++k) {
      arr[k] = tmp[k];
    }
  }
    `,

    python: `
  def merge_sort(arr):
      tmp = arr.copy()
      merge_sort_helper(arr, 0, len(arr) - 1, tmp)
  
  def merge_sort_helper(arr, start, end, tmp):
      if start == end:
          return
  
      mid = (start + end) // 2
  
      merge_sort_helper(arr, start, mid, tmp)
      merge_sort_helper(arr, mid + 1, end, tmp)
  
      merge_sort_merger(arr, start, mid, end, tmp)
  
  def merge_sort_merger(arr, start, mid, end, tmp):
      i = start
      j = mid + 1
      k = start
  
      while i <= mid and j <= end:
          if arr[i] < arr[j]:
              tmp[k] = arr[i]
              i += 1
              k += 1
          else:
              tmp[k] = arr[j]
              j += 1
              k += 1
  
      while i <= mid:
          tmp[k] = arr[i]
          i += 1
          k += 1
  
      while j <= end:
          tmp[k] = arr[j]
          j += 1
          k += 1
  
      for k in range(start, end + 1):
          arr[k] = tmp[k]
    `,
    cpp: `
    #include <vector>
    
    void mergeSortHelper(std::vector<int>& arr, int start, int end, std::vector<int>& tmp) {
        if (start == end) {
            return;
        }
    
        int mid = (start + end) / 2;
    
        mergeSortHelper(arr, start, mid, tmp);
        mergeSortHelper(arr, mid + 1, end, tmp);
    
        mergeSortMerger(arr, start, mid, end, tmp);
    }
    
    void mergeSortMerger(std::vector<int>& arr, int start, int mid, int end, std::vector<int>& tmp) {
        int i = start;
        int j = mid + 1;
        int k = start;
    
        while (i <= mid && j <= end) {
            if (arr[i] < arr[j]) {
                tmp[k] = arr[i];
                i++;
                k++;
            } else {
                tmp[k] = arr[j];
                j++;
                k++;
            }
        }
    
        while (i <= mid) {
            tmp[k] = arr[i];
            i++;
            k++;
        }
    
        while (j <= end) {
            tmp[k] = arr[j];
            j++;
            k++;
        }
    
        for (int k = start; k <= end; ++k) {
            arr[k] = tmp[k];
        }
    }
      `,

    c: `
    #include <stdio.h>
    
    void mergeSortHelper(int arr[], int start, int end, int tmp[]) {
        if (start == end) {
            return;
        }
    
        int mid = (start + end) / 2;
    
        mergeSortHelper(arr, start, mid, tmp);
        mergeSortHelper(arr, mid + 1, end, tmp);
    
        mergeSortMerger(arr, start, mid, end, tmp);
    }
    
    void mergeSortMerger(int arr[], int start, int mid, int end, int tmp[]) {
        int i = start;
        int j = mid + 1;
        int k = start;
    
        while (i <= mid && j <= end) {
            if (arr[i] < arr[j]) {
                tmp[k] = arr[i];
                i++;
                k++;
            } else {
                tmp[k] = arr[j];
                j++;
                k++;
            }
        }
    
        while (i <= mid) {
            tmp[k] = arr[i];
            i++;
            k++;
        }
    
        while (j <= end) {
            tmp[k] = arr[j];
            j++;
            k++;
        }
    
        for (int k = start; k <= end; ++k) {
            arr[k] = tmp[k];
        }
    }
      `,

    java: `
    import java.util.Arrays;
    
    public class MergeSort {
        public static void mergeSort(int[] arr) {
            int[] tmp = Arrays.copyOf(arr, arr.length);
            mergeSortHelper(arr, 0, arr.length - 1, tmp);
        }
    
        public static void mergeSortHelper(int[] arr, int start, int end, int[] tmp) {
            if (start == end) {
                return;
            }
    
            int mid = (start + end) / 2;
    
            mergeSortHelper(arr, start, mid, tmp);
            mergeSortHelper(arr, mid + 1, end, tmp);
    
            mergeSortMerger(arr, start, mid, end, tmp);
        }
    
        public static void mergeSortMerger(int[] arr, int start, int mid, int end, int[] tmp) {
            int i = start;
            int j = mid + 1;
            int k = start;
    
            while (i <= mid && j <= end) {
                if (arr[i] < arr[j]) {
                    tmp[k] = arr[i];
                    i++;
                    k++;
                } else {
                    tmp[k] = arr[j];
                    j++;
                    k++;
                }
            }
    
            while (i <= mid) {
                tmp[k] = arr[i];
                i++;
                k++;
            }
    
            while (j <= end) {
                tmp[k] = arr[j];
                j++;
                k++;
            }
    
            for (int m = start; m <= end; ++m) {
                arr[m] = tmp[m];
            }
        }
    }
      `,

    csharp: `
    using System;
    
    public class MergeSort {
        public static void Sort(int[] arr) {
            int[] tmp = (int[])arr.Clone();
            MergeSortHelper(arr, 0, arr.Length - 1, tmp);
        }
    
        public static void MergeSortHelper(int[] arr, int start, int end, int[] tmp) {
            if (start == end) {
                return;
            }
    
            int mid = (start + end) / 2;
    
            MergeSortHelper(arr, start, mid, tmp);
            MergeSortHelper(arr, mid + 1, end, tmp);
    
            MergeSortMerger(arr, start, mid, end, tmp);
        }
    
        public static void MergeSortMerger(int[] arr, int start, int mid, int end, int[] tmp) {
            int i = start;
            int j = mid + 1;
            int k = start;
    
            while (i <= mid && j <= end) {
                if (arr[i] < arr[j]) {
                    tmp[k] = arr[i];
                    i++;
                    k++;
                } else {
                    tmp[k] = arr[j];
                    j++;
                    k++;
                }
            }
    
            while (i <= mid) {
                tmp[k] = arr[i];
                i++;
                k++;
            }
    
            while (j <= end) {
                tmp[k] = arr[j];
                j++;
                k++;
            }
    
            for (int m = start; m <= end; ++m) {
                arr[m] = tmp[m];
            }
        }
    }
      `,

    rust: `
    pub fn merge_sort(arr: &mut [i32]) {
        let mut tmp = arr.to_vec();
        merge_sort_helper(arr, 0, arr.len() - 1, &mut tmp);
    }
    
    fn merge_sort_helper(arr: &mut [i32], start: usize, end: usize, tmp: &mut Vec<i32>) {
        if start == end {
            return;
        }
    
        let mid = (start + end) / 2;
    
        merge_sort_helper(arr, start, mid, tmp);
        merge_sort_helper(arr, mid + 1, end, tmp);
    
        merge_sort_merger(arr, start, mid, end, tmp);
    }
    
    fn merge_sort_merger(arr: &mut [i32], start: usize, mid: usize, end: usize, tmp: &mut Vec<i32>) {
        let mut i = start;
        let mut j = mid + 1;
        let mut k = start;
    
        while i <= mid && j <= end {
            if arr[i] < arr[j] {
                tmp[k] = arr[i];
                i += 1;
                k += 1;
            } else {
                tmp[k] = arr[j];
                j += 1;
                k += 1;
            }
        }
    
        while i <= mid {
            tmp[k] = arr[i];
            i += 1;
            k += 1;
        }
    
        while j <= end {
            tmp[k] = arr[j];
            j += 1;
            k += 1;
        }
    
        for m in start..=end {
            arr[m] = tmp[m];
        }
    }
      `,
};

export default codeExampleMergeSort;