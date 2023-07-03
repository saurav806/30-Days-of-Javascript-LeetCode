//Link:- https://leetcode.com/problems/filter-elements-from-array/


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filterIndex = 0;

    //Approach 1
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            arr[filterIndex]=arr[i];
            filterIndex++;
        }
    }
    arr.length=filterIndex;
    return arr;

    //Approach 2
    // for(var i=0; i<arr.length; i++){
    //     if(fn(arr[i],i)){
    //         if(i !== filterIndex){
    //             var temp=arr[i];
    //             arr[i]=arr[filterIndex];
    //             arr[filterIndex]=temp;
    //         }
    //         filterIndex++;
    //     }
    // }
    // arr.length = filterIndex;
    // return arr;

    //approach 2
    // var filterArray=[];
    // for(let i=0;i<arr.length;i++){
    //     if(fn(arr[i],i))
    //         filterArray.push(arr[i]);
    // }
    // return filterArray;
};
