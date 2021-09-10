var search = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.round((leftIndex + rightIndex) / 2);
        let middleTarget = nums[middleIndex];
        if(target < middleTarget) rightIndex = middleIndex - 1;
        else if(target > middleTarget) leftIndex = middleIndex + 1;
        else return middleIndex;
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));