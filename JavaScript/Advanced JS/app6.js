let url='http://universities.hipolabs.com/search?country=';


async function getCollege(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(error){
        console.log("Error:",error);
        return [];
    }
}

// getCollege();

let button=document.querySelector('button');
let input=document.querySelector('input');
// let body=document.querySelector('body');
let ul=document.querySelector('ul');

button.addEventListener('click',async()=>{
    let country=input.value;
    let colArr=await getCollege(country);
    // console.log(colArr);
    show(colArr);
})

function show(colArr){
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement('li');
        ul.appendChild(li);
        li.innerText=col.name;
    }
}