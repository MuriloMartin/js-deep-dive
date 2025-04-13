# js-event-loop

## Description:
The goal of this repository is to understad how node.js and web browsers deal with async / blocking operation. To get there, we will first do a deepdive on node.js ans web browsers to get the theory, and then write a script simulate the event loop itself

## Basic Definitions:
* Node.js => JS runtime environment.
* V8 engine => JS engine that powers google chrome. It parses and executes js code. JS is considered a interpreted language, but V8 actually uses jit compilation. 
* DOM =>
* Web Platform APIs =>
* Runtine environment => V8 + DOM + Web Platform APIs
* Babel => JS tranpiler Converts newer / modern version of JS to a version that is compatible to the browser (usually ES5)
* Blocking => When the execution of additional JS int he node,js process must wait until a non-JS operation completes 

## Event loop 
Enables Node.js to perform non-blocking I/o Operations, by ofloading operations to the system kernel whenever possible. 

### Phases of the event loop
Each ohase has a FIFO queue ofcallbacks to execute. When the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed.




