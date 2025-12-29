//Using Axios Library

let url='https://catfact.ninja/fact'

async function getFacts() {
    try {
        let res=await axios.get(url);
        console.log(res.data);
        return res.data.fact;
    } catch (error) {
        console.log("Error: ",error);
        return "No fact found";
    }   
}

let p1=document.querySelector('.p1');
let btn=document.querySelector('.btn');

btn.addEventListener('click',async ()=>{
    let fact=await getFacts();
    console.log(fact);
    p1.innerText=fact;
})


let url2='https://dog.ceo/api/breeds/image/random';

async function getImage(){
    try{
        let res2=await axios.get(url2);
        // console.log(res2);
        return res2.data.message;
    }catch(error){
        // console.log("Error:",error);
        return "No image found";
    }
}

let btn2=document.querySelector('.btn2');
let img=document.querySelector('img');

btn2.addEventListener('click',async()=>{
    let link=await getImage();
    console.log(link);
    // img.src=link;
    img.setAttribute('src',link);
})

let url3='https://icanhazdadjoke.com/';

async function getJoke(){
    try{
        const config={headers: {Accept: 'application/json'} };
        let res=await axios.get(url3,config);
        // console.log(res.data);
        return res.data.joke;
    }catch(error){
        console.log(error);
        return "No joke found";
    }
}
let btn3=document.querySelector('.btn3');
let p2=document.querySelector('.p2');
btn3.addEventListener('click',async ()=>{
    let joke=await getJoke();
    p2.innerText=joke;
})