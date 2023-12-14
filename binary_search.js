function binarySearch(arr, low, high, key){
   if(high >= low){
    let mid = (high + low) // 2
    if(arr[mid] == key) return mid;

    else if(arr[mid] > key) return binarySearch(arr, low, mid-1, key)
    else return binarySearch(arr, mid+1, high, key)
   }
   else return -1     
}

let arr = [2, 3, 4, 10, 40]
let x = 10
 
let result = binarySearch(arr, 0, (arr.length) - 1, x)

if(result != -1)  console.log("Element is present at index "+ result)
else console.log("Element is not present in array")