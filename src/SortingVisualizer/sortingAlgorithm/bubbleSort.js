export const getBubbleSortAnimations = (mainArray) => {
    const animations = [];
    bubbleSort(mainArray, animations);
    return animations;
}


export const bubbleSort = (mainArray, animations) => {
    for (let i = 0; i < mainArray.length; i ++) {
        for (let j = 0; j < mainArray.length - i -1; j++) {
            if (mainArray[j] > mainArray[j+1]) {
                // i and j are indexes of 2 elements being compared
                // 1st time is to highlight current elements being compared
                animations.push([j,j+1]);
                // 2nd time is to revert the color back once done comparing
                animations.push([j,j+1]);
                const tempVal = mainArray[j];
                mainArray[j] = mainArray[j+1];
                mainArray[j+1] = tempVal;
                // push index and new height of the element in the bars array that needs to be changed its height
                animations.push([j, mainArray[j], j+1, mainArray[j+1]]);
            }
        }
    }
    return mainArray;
}