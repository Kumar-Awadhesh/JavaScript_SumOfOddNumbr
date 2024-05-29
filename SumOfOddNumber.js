//function to calculate sum of odd numbers.
function oddSum(array){
    let sum=0;
    //iteration over array to check wether number is odd or not.
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            //storing the sum of odd number in the variable sum.
            sum+=array[i]
        }
    }
    //return the sum of odd numbers to the function.
    return(sum)
}

//input Taking of array.
const array=[1, 2, 3, 4]

//calling the function to print the sum of odd number.
let arr=oddSum(array)
console.log(arr)