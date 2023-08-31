const codeExampleSelectioSort = {
    typescript: `
  function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }
  `,
    javascript: `
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }
  `,
    python: `
  def selectionSort(arr):
      for i in range(len(arr)):
          for j in range(i + 1, len(arr)):
              if arr[i] > arr[j]:
                  arr[i], arr[j] = arr[j], arr[i]
  `,
    cpp: `
  #include <iostream>
  using namespace std;
  
  void selectionSort(int arr[], int n) {
      for (int i = 0; i < n; ++i) {
          for (int j = i + 1; j < n; ++j) {
              if (arr[i] > arr[j]) {
                  swap(arr[i], arr[j]);
              }
          }
      }
  }
  `,
    c: `
  #include <stdio.h>
  
  void selectionSort(int arr[], int n) {
      for (int i = 0; i < n; ++i) {
          for (int j = i + 1; j < n; ++j) {
              if (arr[i] > arr[j]) {
                  int temp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp;
              }
          }
      }
  }
  `,
    java: `
  public class SelectionSort {
      public static void selectionSort(int[] arr) {
          for (int i = 0; i < arr.length; ++i) {
              for (int j = i + 1; j < arr.length; ++j) {
                  if (arr[i] > arr[j]) {
                      int temp = arr[i];
                      arr[i] = arr[j];
                      arr[j] = temp;
                  }
              }
          }
      }
  }
  `,
    csharp: `
  using System;
  
  class SelectionSort {
      public static void SelectionSort(int[] arr) {
          for (int i = 0; i < arr.Length; ++i) {
              for (int j = i + 1; j < arr.Length; ++j) {
                  if (arr[i] > arr[j]) {
                      int temp = arr[i];
                      arr[i] = arr[j];
                      arr[j] = temp;
                  }
              }
          }
      }
  }
  `,
    rust: `
  fn selection_sort(arr: &mut [i32]) {
      for i in 0..arr.len() {
          for j in i + 1..arr.len() {
              if arr[i] > arr[j] {
                  arr.swap(i, j);
              }
          }
      }
  }
  `
};

export default codeExampleSelectioSort;