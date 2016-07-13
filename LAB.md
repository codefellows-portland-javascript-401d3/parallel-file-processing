![CF](http://i.imgur.com/7v5ASc8.png) Parallel File Processing
===

## Doc Resources
* [Node fs docs](https://nodejs.org/api/fs.html)
* JSON [stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 
and [parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

##Description:
This assignment will have you create an object store using json files and the file system.

Your file store should:
* Live under a central directory configurable at startup
* Store resources (semantic kind of object) by "type" under a folder
* Store each object into a file using
    * An identifier for the file name
    * JSON to serialize the object
* Support the following API calls:
    * Retrieve all objects of a given resource type
    * Retrieve an array of objects from an array id's in same order
    * Store an object (returns id if already part of object)

API calls should be implemented _in parallel_ when possible.

You need to have tests that verify the results.  Make sure you test file order with a test
that explcitly has a different than another test.

Standard repository/dev stuff: README, package.json, travis-ci, tests, meaningful commits, named npm scripts, etc.

##Rubric:

  * Functional Correct Behavior (including paralellism): 3pts
  * Async coding style: 2pts
  * Project (Module) Organization: 2pts
  * Tests: 3pts
