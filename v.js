// const arr=[4,2,34,56,1]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//          if(arr[j]>arr[j+1]){
//             let temp= arr[j]
//             arr[j]=arr[j+1];
//             arr[j+1]=temp
//          }
//     }
// }
// console.log(arr)



function rev(arr){
let i=0;
let j= arr.length-1;

while(i<j){
    arr[i]=arr[i]+arr[j]
    arr[j]=arr[i]-arr[j]
    arr[j]=arr[i]-arr[j]
    i++
    j--

}
return arr
}

console.log(rev([1,2,3,4]))




 
