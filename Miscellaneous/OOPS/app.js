let arr=[1,2,3,4];
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(String.prototype);

arr.__proto__.push= n=>{        //Changed push function definition
    arr[arr.length-1]=n;
    console.log('pushed element:',n);
    console.log('Updated arr',arr);
}

arr.push(2);
