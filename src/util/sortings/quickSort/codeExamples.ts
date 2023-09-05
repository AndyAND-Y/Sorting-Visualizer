import { ProgrammingLanguageType } from "@/types/Languages";

const codeExampleQuickSort: { [k in ProgrammingLanguageType]: string } = {
    typescript: `
  function quickSort(arr: number[]) {
    quickSortHelper(arr, 0, arr.length - 1);
  }
  
  function partition(arr: number[], start: number, end: number) {
    const pivotIndex = Math.floor((start + end) / 2);
    let lowerPartEnd = start - 1;
  
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  
    for (let i = start; i < end; ++i) {
      if (arr[i] <= arr[end]) {
        lowerPartEnd++;
        [arr[i], arr[lowerPartEnd]] = [arr[lowerPartEnd], arr[i]];
      }
    }
    lowerPartEnd++;
  
    [arr[lowerPartEnd], arr[end]] = [arr[end], arr[lowerPartEnd]];
  
    return lowerPartEnd;
  }
  
  function quickSortHelper(arr: number[], start: number, end: number) {
    if (start >= end) return;
  
    const pivotIndex = partition(arr, start, end);
    quickSortHelper(arr, start, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, end);
  }
    `,
    javascript: `
  function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
  }
  
  function partition(arr, start, end) {
    const pivotIndex = Math.floor((start + end) / 2);
    let lowerPartEnd = start - 1;
  
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  
    for (let i = start; i < end; ++i) {
      if (arr[i] <= arr[end]) {
        lowerPartEnd++;
        [arr[i], arr[lowerPartEnd]] = [arr[lowerPartEnd], arr[i]];
      }
    }
    lowerPartEnd++;
  
    [arr[lowerPartEnd], arr[end]] = [arr[end], arr[lowerPartEnd]];
  
    return lowerPartEnd;
  }
  
  function quickSortHelper(arr, start, end) {
    if (start >= end) return;
  
    const pivotIndex = partition(arr, start, end);
    quickSortHelper(arr, start, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, end);
  }
    `,
    python: `
  def quickSort(arr):
      quickSortHelper(arr, 0, len(arr) - 1)
  
  def partition(arr, start, end):
      pivotIndex = (start + end) // 2
      lowerPartEnd = start - 1
  
      arr[pivotIndex], arr[end] = arr[end], arr[pivotIndex]
  
      for i in range(start, end):
          if arr[i] <= arr[end]:
              lowerPartEnd += 1
              arr[i], arr[lowerPartEnd] = arr[lowerPartEnd], arr[i]
      
      lowerPartEnd += 1
      arr[lowerPartEnd], arr[end] = arr[end], arr[lowerPartEnd]
  
      return lowerPartEnd
  
  def quickSortHelper(arr, start, end):
      if start >= end:
          return
  
      pivotIndex = partition(arr, start, end)
      quickSortHelper(arr, start, pivotIndex - 1)
      quickSortHelper(arr, pivotIndex + 1, end)
    `,
    cpp: `
  #include <iostream>
  #include <vector>
  
  void quickSort(std::vector<int>& arr) {
      quickSortHelper(arr, 0, arr.size() - 1);
  }
  
  int partition(std::vector<int>& arr, int start, int end) {
      int pivotIndex = (start + end) / 2;
      int lowerPartEnd = start - 1;
  
      std::swap(arr[pivotIndex], arr[end]);
  
      for (int i = start; i < end; ++i) {
          if (arr[i] <= arr[end]) {
              lowerPartEnd++;
              std::swap(arr[i], arr[lowerPartEnd]);
          }
      }
      lowerPartEnd++;
  
      std::swap(arr[lowerPartEnd], arr[end]);
  
      return lowerPartEnd;
  }
  
  void quickSortHelper(std::vector<int>& arr, int start, int end) {
      if (start >= end) return;
  
      int pivotIndex = partition(arr, start, end);
      quickSortHelper(arr, start, pivotIndex - 1);
      quickSortHelper(arr, pivotIndex + 1, end);
  }
    `,
    c: `
  #include <stdio.h>
  
  void quickSort(int arr[], int size) {
      quickSortHelper(arr, 0, size - 1);
  }
  
  int partition(int arr[], int start, int end) {
      int pivotIndex = (start + end) / 2;
      int lowerPartEnd = start - 1;
  
      int temp = arr[pivotIndex];
      arr[pivotIndex] = arr[end];
      arr[end] = temp;
  
      for (int i = start; i < end; ++i) {
          if (arr[i] <= arr[end]) {
              lowerPartEnd++;
              temp = arr[i];
              arr[i] = arr[lowerPartEnd];
              arr[lowerPartEnd] = temp;
          }
      }
      lowerPartEnd++;
  
      temp = arr[lowerPartEnd];
      arr[lowerPartEnd] = arr[end];
      arr[end] = temp;
  
      return lowerPartEnd;
  }
  
  void quickSortHelper(int arr[], int start, int end) {
      if (start >= end) return;
  
      int pivotIndex = partition(arr, start, end);
      quickSortHelper(arr, start, pivotIndex - 1);
      quickSortHelper(arr, pivotIndex + 1, end);
  }
    `,
    java: `
  public class QuickSort {
      public static void quickSort(int[] arr) {
          quickSortHelper(arr, 0, arr.length - 1);
      }
  
      public static int partition(int[] arr, int start, int end) {
          int pivotIndex = (start + end) / 2;
          int lowerPartEnd = start - 1;
  
          int temp = arr[pivotIndex];
          arr[pivotIndex] = arr[end];
          arr[end] = temp;
  
          for (int i = start; i < end; ++i) {
              if (arr[i] <= arr[end]) {
                  lowerPartEnd++;
                  temp = arr[i];
                  arr[i] = arr[lowerPartEnd];
                  arr[lowerPartEnd] = temp;
              }
          }
          lowerPartEnd++;
  
          temp = arr[lowerPartEnd];
          arr[lowerPartEnd] = arr[end];
          arr[end] = temp;
  
          return lowerPartEnd;
      }
  
      public static void quickSortHelper(int[] arr, int start, int end) {
          if (start >= end) return;
  
          int pivotIndex = partition(arr, start, end);
          quickSortHelper(arr, start, pivotIndex - 1);
          quickSortHelper(arr, pivotIndex + 1, end);
      }
  }
    `,
    csharp: `
  using System;
  
  public class QuickSort {
      public static void Sort(int[] arr) {
          QuickSortHelper(arr, 0, arr.Length - 1);
      }
  
      private static int Partition(int[] arr, int start, int end) {
          int pivotIndex = (start + end) / 2;
          int lowerPartEnd = start - 1;
  
          int temp = arr[pivotIndex];
          arr[pivotIndex] = arr[end];
          arr[end] = temp;
  
          for (int i = start; i < end; ++i) {
              if (arr[i] <= arr[end]) {
                  lowerPartEnd++;
                  temp = arr[i];
                  arr[i] = arr[lowerPartEnd];
                  arr[lowerPartEnd] = temp;
              }
          }
          lowerPartEnd++;
  
          temp = arr[lowerPartEnd];
          arr[lowerPartEnd] = arr[end];
          arr[end] = temp;
  
          return lowerPartEnd;
      }
  
      private static void QuickSortHelper(int[] arr, int start, int end) {
          if (start >= end) return;
  
          int pivotIndex = Partition(arr, start, end);
          QuickSortHelper(arr, start, pivotIndex - 1);
          QuickSortHelper(arr, pivotIndex + 1, end);
      }
  }
    `,
    rust: `
  fn quick_sort(arr: &mut [i32]) {
      quick_sort_helper(arr, 0, arr.len() as isize - 1);
  }
  
  fn partition(arr: &mut [i32], start: isize, end: isize) -> isize {
      let pivot_index = (start + end) / 2;
      let mut lower_part_end = start - 1;
  
      arr.swap(pivot_index as usize, end as usize);
  
      for i in start..end {
          if arr[i as usize] <= arr[end as usize] {
              lower_part_end += 1;
              arr.swap(i as usize, lower_part_end as usize);
          }
      }
      lower_part_end += 1;
  
      arr.swap(lower_part_end as usize, end as usize);
  
      lower_part_end
  }
  
  fn quick_sort_helper(arr: &mut [i32], start: isize, end: isize) {
      if start >= end {
          return;
      }
  
      let pivot_index = partition(arr, start, end);
      quick_sort_helper(arr, start, pivot_index - 1);
      quick_sort_helper(arr, pivot_index + 1, end);
  }
    `,
};

export default codeExampleQuickSort;