// translations.ts
const codeExampleBubbleSort = {
    typescript: `
  function bubbleSort(arr: number[]) {
    let swapped: boolean;
    do {
      swapped = false;
      for (let i = 1; i < arr.length; ++i) {
        if (arr[i - 1] > arr[i]) {
          swapped = true;
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
      }
    } while (swapped === true);
  }
  `,

    javascript: `
  function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < arr.length; ++i) {
        if (arr[i - 1] > arr[i]) {
          swapped = true;
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
      }
    } while (swapped === true);
  }
  `,

    python: `
  def bubble_sort(arr):
    swapped = True
    while swapped:
      swapped = False
      for i in range(1, len(arr)):
        if arr[i - 1] > arr[i]:
          swapped = True
          arr[i - 1], arr[i] = arr[i], arr[i - 1]
  `,

    cpp: `
  #include <iostream>
  #include <vector>
  
  void bubbleSort(std::vector<int>& arr) {
    bool swapped;
    do {
      swapped = false;
      for (int i = 1; i < arr.size(); ++i) {
        if (arr[i - 1] > arr[i]) {
          swapped = true;
          std::swap(arr[i - 1], arr[i]);
        }
      }
    } while (swapped);
  }
  `,

    c: `
  #include <stdio.h>
  
  void bubbleSort(int arr[], int size) {
    int swapped;
    do {
      swapped = 0;
      for (int i = 1; i < size; ++i) {
        if (arr[i - 1] > arr[i]) {
          swapped = 1;
          int temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
        }
      }
    } while (swapped);
  }
  `,

    java: `
  public class BubbleSort {
    public static void bubbleSort(int[] arr) {
      boolean swapped;
      do {
        swapped = false;
        for (int i = 1; i < arr.length; ++i) {
          if (arr[i - 1] > arr[i]) {
            swapped = true;
            int temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
          }
        }
      } while (swapped);
    }
  }
  `,

    csharp: `
  using System;
  
  class Program {
    static void BubbleSort(int[] arr) {
      bool swapped;
      do {
        swapped = false;
        for (int i = 1; i < arr.Length; ++i) {
          if (arr[i - 1] > arr[i]) {
            swapped = true;
            int temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
          }
        }
      } while (swapped);
    }
  }
  `,

    rust: `
  fn bubble_sort(arr: &mut [i32]) {
    let mut swapped;
    loop {
      swapped = false;
      for i in 1..arr.len() {
        if arr[i - 1] > arr[i] {
          swapped = true;
          arr.swap(i - 1, i);
        }
      }
      if !swapped {
        break;
      }
    }
  }
  
  `,
} as const;

export default codeExampleBubbleSort;
