function binarySearch(arr, low, high, key){
    //check if array has element
    if(high>=low){

        //getting middle of the array
        let mid = (high + low) // 2

        //return if middle one is the key
        if(arr[mid] == key) return mid

        // if middle one is greater than key
        else if(arr[mid] > key) return binarySearch(arr, low, mid-1, key)

        else return binarySearch(arr, mid+1, high, key)
    }
    else return -1
}

//Driver code
let arr = [2, 3, 4, 10, 40]
let x = 10
 
let result = binarySearch(arr, 0, (arr.length) - 1, x)

if(result != -1)  console.log("Element is present at index "+ result)
else console.log("Element is not present in array")