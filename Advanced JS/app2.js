//Promise

function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4){
            resolve("success: Data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

console.log(savetoDb("apna college"));

let request=savetoDb("apna college");
console.log(request);

request
    .then(
        ()=>{
            console.log("Promise Resolved");
        })
    .catch(
        ()=>{
            console.log("Promise rejected");
        });


// Promise Chaining

savetoDb("apna college")
    .then(
        ()=>{
            console.log("Data 1 saved. Promise Resolved");
            savetoDb('hello world')
            .then(()=>{
                console.log('Data 2 saved. Promise was resolved');
            });
        }) 
    .catch(
        ()=>{
            console.log("Promise rejected");
        });

// Improved Promise Chaining (Readable), removes Callback Hell

savetoDb("apna college")
    .then(
        (result)=>{
            console.log("Data 1 saved. Promise Resolved");
            console.log("Result of promise:",result);
            return savetoDb('hello world');
        })
    .then(
        (result)=>{
            console.log('Data 2 saved. Promise was resolved');
            console.log("Result of promise:",result);
            return savetoDb('hello');
        })
    .then(
        (result)=>{
            console.log('Data 3 saved. Promise was resolved');
            console.log("Result of promise:",result);
        })
    .catch(
        (error)=>{
            console.log("Promise rejected");
            console.log("Result of promise:",error);
        });
