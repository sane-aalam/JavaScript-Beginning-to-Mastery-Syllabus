
function binarySearch(arr,target_value){

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start+end)/2);

    while(start <=end){
        if(arr[mid] == target_value){
            return mid;
        }else if(arr[mid] < target_value){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
        mid = Math.floor((start+end)/2);
    }
    return -1;
}

let arr = [1,2,3,4,5,6,17,18];
let target_value = 17;
let is_present_or_not = binarySearch(arr,target_value);
console.log(is_present_or_not);