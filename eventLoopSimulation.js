/*
JS code:
setTimeout(() => {
        console.log('callback')
    }, 5000);
console.log(1)
console.log(2)
*/ 

var webApi = []
var microTaskQueue = []
var macroTaskQueue = []
var stack = []
var commands = []
var tiks = 0

commands.unshift({"name": "setTimeout", "callback": "console.log('callback')", "async": true, "queue": "macro", "processingTime": 10})
commands.unshift({"name": "console.log(1)", "async": false, "callback": null, "processingTime": 0})
commands.unshift({"name": "console.log(2)", "async": false, "callback": null, "processingTime": 0})

while (true) {
    console.log(`\nTicks:${tiks++}`)

    if (commands.length > 0) {
        let command = commands.pop()
        console.log(`pushing command ${command.name} to stack...`)
        stack.push(command)
        if (stack.length > 0) {
            while (true) {
                var executing = stack.pop()
                if (executing == undefined) {
                    break
                }
                console.log("executing ", executing.name)
                if (executing.async){
                    console.log(`pushing command ${executing.name} to webApi...`)
                    webApi.push(executing)
                }

            }
        }
                    
    }

    webApi.forEach(el => {
        if (el.processingTime >= 0){
            el.processingTime = el.processingTime - 1
        }
    })

    indexToMove = webApi.findIndex(el => el.processingTime == 0 )
    if (indexToMove > -1){
        queue = webApi.at(indexToMove).queue
        console.log(`callback ready at queue ${queue}`)
        if (queue == 'macro') {
            macroTaskQueue.push(webApi.at(indexToMove))
        }
        if (queue == 'micro') {
            microTaskQueue.push(webApi.at(indexToMove))
        }
        webApi.splice(indexToMove,1)
    }

    while (true) {
        var executing = macroTaskQueue.pop()
        if (executing == undefined) {
            break
        }
        console.log("executing ", executing.callback)
    }

    

    if (commands.length + stack.length + microTaskQueue.length + macroTaskQueue.length + webApi.length === 0) {
        break;
    }


}


