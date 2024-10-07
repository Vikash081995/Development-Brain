/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 *
 * Time complexity: O(n^2)
 *
 * @param {number[]} arr The array to be sorted
 */
function bubbleSort(arr) {
  // This variable will be used to keep track of whether there were any swaps
  // during the current pass through the array. If there were no swaps, then the
  // array is already sorted and we can stop early.
  let swapped;

  // Keep looping until there are no swaps, which means the array is sorted.
  do {
    // Set the swapped flag to false initially, since we haven't yet done any
    // swaps in this pass through the array.
    swapped = false;

    // Loop through the array starting from the first element and going up to
    // the second-to-last element (since we're comparing each element with the
    // element after it).
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current element is greater than the element after it, then we
      // need to swap them in order to sort the array in ascending order.
      if (arr[i] > arr[i + 1]) {
        // Create a temporary variable to hold the value of the current
        // element, since we're about to overwrite it with the value of the
        // element after it.
        let temp = arr[i];

        // Swap the values of the current element and the element after it.
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // Set the swapped flag to true to indicate that we did a swap in this
        // pass through the array.
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, -22, 4, 5, 7, 8];
bubbleSort(arr);
console.log(arr);
// [-22, 4, 5, 7, 8, 8]
