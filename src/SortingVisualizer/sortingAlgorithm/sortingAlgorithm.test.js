import {mergeSort} from './mergeSort';
import {insertionSort} from './insertionSort';
import {bubbleSort} from './bubbleSort';

const input = [5, 4, 2, 1, 3, 7, 8, 6];
const auxiliaryArray = input.slice(); // for merge sort only
const output = [1, 2, 3, 4, 5, 6, 7, 8];

test('Insertion Sort', () => {
    expect(JSON.stringify(insertionSort(input, []))).toBe(JSON.stringify(output));
});

test('Bubble Sort', () => {
    expect(JSON.stringify(bubbleSort(input, []))).toBe(JSON.stringify(output));
})

test('Merge Sort', () => {
    expect(JSON.stringify(mergeSort(input, 0, input.length - 1, auxiliaryArray, []))).toBe(JSON.stringify(output));
})