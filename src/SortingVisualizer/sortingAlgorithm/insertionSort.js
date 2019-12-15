export const getInsertionSortAnimations = (mainArray) => {
    const animations = [];
    insertionSort(mainArray, animations);
    return animations;
}

const insertionSort = (mainArray, animations) => {
    for (let i = 1; i < mainArray.length; i ++) {
        let j = i;
        let x = mainArray[i];
        while ((j > 0) && (mainArray[j-1] > x)) {
            animations.push([j-1, j]);
            animations.push([j-1, j]);
            mainArray[j] = mainArray[j-1];
            animations.push([j, mainArray[j-1]])
            j -= 1
        }
        mainArray[j] = x
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([j, x]);
    }
}