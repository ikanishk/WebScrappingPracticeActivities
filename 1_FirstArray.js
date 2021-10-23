let clarg=process.argv;
let n=parseInt(clarg[2]);
arr=[];

for(let i=0;i<n;i++){
    let val=parseInt(clarg[i+3])//As the first 2 elements of argv array are address and the 3rd is the array size
    arr.push(val);
    // console.log(val);
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

