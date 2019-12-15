export const getBubbleSortAnimations = (mainArray) => {
    const animations = [];
    bubbleSort(mainArray, animations);
    return animations;
}


const bubbleSort = (mainArray, animations) => {
    for (let i = 0; i < mainArray.length; i ++) {
        for (let j = 0; j < mainArray.length - i -1; j++) {
            if (mainArray[j] > mainArray[j+1]) {
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                const tempVal = mainArray[j];
                mainArray[j] = mainArray[j+1];
                mainArray[j+1] = tempVal;
                animations.push([j, mainArray[j], j+1, mainArray[j+1]]);
            }
        }
    }
}