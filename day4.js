//Question 1

/* There are four states in a promise :
   1. fulfilled : Action related to promise succeeded.
   2. rejected : Action related to promise rejected.
   3. Pending : Promise is still pending ie not fulfilled and not rejected
   4. settled : Promise has fulfilled or rejected.
*/

//Question 2

function delayedLowerCase(text){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text.toLowerCase());
        },5000);
    })
}

delayedLowerCase('Beautiful Code').then((res)=>{
    console.log(res);
})

//Question 3

function delayedLowerCase(text){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text.toLowerCase());
        },5000);
    })
}

delayedLowerCase('Beautiful Code').then((res)=>{
    console.log(res);
    return res+ '-'+ res.length;
}).then((res)=>{
    console.log(res);
    return res;
})



//Question 1

//Normal Promise

function getProcessedData(url){
    return DownloadData(url)
    .then(v=>{
        return processDataInWork(v);
    })
    .catch(e=>{
        return downloadFallbackData(url);
    })
}

//Converted to async-await

async function getProcessedData(url){
    try{
        let v = await DownloadData(url);
        return processDataInWork(v);
    }
    catch(e){
        return downloadFallbackData(url);
    }
}




