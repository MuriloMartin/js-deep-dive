# JS deep-dive

## Description:
Deep dive on core concepts about Javascript, Node.js and Browsers

## Basic Definitions:
* Node.js => JS runtime environment.
* V8 engine => JS engine that powers google chrome. It parses and executes js code. JS is considered a interpreted language, but V8 actually uses jit compilation. 
* DOM => Document Object Model is the data representation of the objects that comprise the structure and content of a document on the web
* Web Platform APIs =>  It allows JavaScript code to access data or perform tasks that are not part of the core JavaScript language, such as manipulating the document object model (DOM), sending HTTP requests, playing audio or video, using geolocation, etc.
* Runtine environment => V8 + DOM + Web Platform APIs
* Babel => JS tranpiler Converts newer / modern version of JS to a version that is compatible to the browser (usually ES5)
* Blocking => When the execution of additional JS int he node,js process must wait until a non-JS operation completes 

## Event loop 
Enables Node.js to perform non-blocking I/o Operations, by ofloading operations to the system kernel whenever possible. 

### Phases of the event loop
* Timers: executes callbacks shceduled by setTimeot() and setInterval
* Pending callbacks: executes I/O callbacks deferred to the next loop iteration
* Idle, prepare: only used internally.
* Poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
* Check: setImmediate() callbacks are invoked here.
* Close callbacks: some close callbacks, e.g. socket.on('close', ...)

Each ohase has a FIFO queue ofcallbacks to execute. When the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed.


## callbacks Vs promises Vs async/await 
A Promise is an object representing the eventual completion or failure of an asynchronous operation.