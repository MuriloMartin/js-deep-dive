
async function teste() {
    console.log("calling")
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const actualResult = await result.json()
    console.log('done')
}

teste()
console.log("console log 1")
