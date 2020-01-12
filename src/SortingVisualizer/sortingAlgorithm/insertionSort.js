export const getInsertionSortAnimations = (mainArray) => {
    const animations = [];
    insertionSort(mainArray, animations);
    return animations;
}

export const insertionSort = (mainArray, animations) => {
    for (let i = 1; i < mainArray.length; i ++) {
        let j = i;
        let x = mainArray[i];
        while ((j > 0) && (mainArray[j-1] > x)) {
            // i and j are indexes of 2 elements being compared
            // 1st time is to highlight current elements being compared
            animations.push([j-1, j]);
            // 2nd time is to revert the color back once done comparing
            animations.push([j-1, j]);
            mainArray[j] = mainArray[j-1];
            // push index and new height of the element in the bars array that needs to be changed its height
            animations.push([j, mainArray[j-1]])
            j -= 1
        }
        mainArray[j] = x
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([j, x]);
    }
    return mainArray;
}