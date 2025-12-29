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