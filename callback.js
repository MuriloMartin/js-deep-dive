function request1() {
    setTimeout(()=>{
        console.log('return of request 1')
    },100)
}

function request2() {
    setTimeout(()=>{
        console.log('return of request 2')
    },0)
}

console.log("start")

request1()
request2()

console.log("end")




