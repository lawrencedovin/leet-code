var searchInsert = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.round((leftIndex + rightIndex) / 2);
        let middleTarget = nums[middleIndex];
        
        if(target < middleTarget) rightIndex = middleIndex - 1;
        else if(target > middleTarget) leftIndex = middleIndex + 1;
        else return middleIndex;
    }
    
    return rightIndex + 1;
    
};