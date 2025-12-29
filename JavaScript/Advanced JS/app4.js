let jsonRes=
'{"fact":"Cats step with both left legs, then both right legs when they walk or run.","length":74}';

let validRes=JSON.parse(jsonRes);
console.log(validRes.fact);

let student={
    name: 'sahitya',
    marks: 100
}

let str=JSON.stringify(student);
console.log(str);

// API Call

let url='http://universities.hipolabs.com/search?name=National&country=India';
console.log(fetch(url));    //returns a promise

let url2='https://catfact.ninja/fact'

fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json();
        })
    .then((data)=>{
        console.log(data[0].name);
        return fetch(url2);
    })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data2)=>{
        console.log(data2.fact);
        return fetch(url2);
    })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data3)=>{
            console.log(data3.fact);
    })
    .catch((err)=>{
        console.log('ERROR: ',err);
    });


//Using async and await

async function getFacts() {
    try {
        let res=await fetch(url2);
        let data=await res.json();
        console.log(data.fact);

        let res2=await fetch(url2);
        let data2=await res2.json();
        console.log(data2.fact);
    } catch (error) {
        console.log("Error: ",error);
    }   
}
getFacts();