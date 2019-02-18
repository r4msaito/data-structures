/*
 * Sorting algorithms in JS
 */

'use strict';

function dsSorting() {

    /*
     * Bubble sort
     */

    this.bubbleSort = function(arr, order) {
        var order = order || 'asc';
        var swapped = false;
        var thisClass = this;

        if (arr.length <= 1)
            return arr;

        do {
            swapped = false;
            arr.forEach(function(element, idx) {
                if (arr.length === (idx + 1))
                    return;

                if (order === 'asc') {
                    if (arr[idx] > arr[idx + 1]) {
                        thisClass.swap(arr, idx, idx + 1);
                        swapped = true;
                    }
                } else if (order === 'desc') {
                    if (arr[idx] < arr[idx + 1]) {
                        thisClass.swap(arr, idx, idx + 1);
                        swapped = true;
                    }
                }
            });
        } while (swapped);

        return arr;
    };


    /*
     * Selection sort
     */

    this.selectionSort = function(arr, order) {
        var order = order || 'asc';

        if (arr.length <= 1)
            return arr;

        var requireSwap = false;
        var i = 0;

        for (i = 0; i < arr.length - 1; i++) {
            var sIdx = i;
            for (var j = i; j < arr.length; j++) {
                if (order === 'asc') {
                    if (arr[j] < arr[sIdx]) {
                        sIdx = j;
                        requireSwap = true;
                    }
                } else if (order === 'desc') {
                    if (arr[j] > arr[sIdx]) {
                        sIdx = j;
                        requireSwap = true;
                    }
                }
            }

            if (requireSwap)
                this.swap(arr, i, sIdx);
        }

        return arr;
    };


    /*
     * Selection sort
     */

    this.insertionSort = function(arr, order) {
        var order = order || 'asc';

        if (arr.length <= 0)
            return arr;

        for (var i = 1; i < arr.length; i++) {
            var pivotValue = arr[i];

            for (var j = i - 1; j >= 0; j--) {
                if (order === 'asc') {
                    while (arr[j] > arr[j + 1])
                        this.swap(arr, j, j + 1);
                } else if (order === 'desc') {
                    while (arr[j] < arr[j + 1])
                        this.swap(arr, j, j + 1);
                }
            }
        }

        return arr;
    }


    /*
     * Quick sort
     */

    this.quickSort = function() {};
    this.mergeSort = function() {};
    this.shellSort = function() {};

    /*
     * Swap the values in two array indexes
     */

    this.swap = function(arr, sIdx, dIdx) {
        var temp = arr[sIdx];
        arr[sIdx] = arr[dIdx];
        arr[dIdx] = temp;
        return arr;
    };
}