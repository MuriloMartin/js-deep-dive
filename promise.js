
function teste(){
    console.log("calling")
    const promise = fetch('https://jsonplaceholder.typicode.com/posts/1')
    promise.then((res)=>{
        return res.json()
    }).then((x)=>console.log('done'))
}

teste()
console.log("console log 1")
