function binarySearch(arr,key){
     var low=0;
     var high=arr.length -1;
     var mid;
     var element;
     while(low <= high){
           mid=Math.floor((low+high)/2,10);
           element=arr[mid];
           if(element < key){
                low=mid + 1;
           }
           else if(element > key){
                high=mid - 1;
           }
           else
           {
                return mid;
           }
     }
     return -1;
}
console.log(binarySearch([1,2,3,4,6,7,9],9));