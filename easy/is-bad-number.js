/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        
        while(start <= end){
            midValue = Math.round((start + end) / 2);
            isBadVersion(midValue) ? end = midValue - 1 : start = midValue + 1;
        }
        return end + 1;
    };
};