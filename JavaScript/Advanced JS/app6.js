let url='http://universities.hipolabs.com/search?country=';


async function getCollege(country,state) {
    try{
        let res=await axios.get(url+country+'&state-province='+state);
        console.log(res.data);
        return res.data;
    }catch(error){
        console.log("Error:",error);
        return [];
    }
}

// getCollege();

let button=document.querySelector('button');
let input=document.querySelector('#i1');
let input2=document.querySelector('#i2');
let ul=document.querySelector('ul');

button.addEventListener('click',async()=>{
    let country=input.value;
    let state=input2.value;
    let colArr=await getCollege(country,state);
    // console.log(colArr);
    show(colArr);
})

function show(colArr){
    ul.innerHTML='';
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement('li');
        ul.appendChild(li);
        li.innerText=col.name;
    }
}