// "PATH_CORE_MODULE":

var path = require('path')
console.log(path.basename('/Users/Refsnes/demo_path.js'))
// Ans="demo_path.js"

var path = require('path')
console.log(path.dirname('/Users/Refsnes/demo_path.js'))
// Ans="/Users/Refsnes"

var path = require('path')
console.log(path.normalize('Users/Refsnes/../jackson'))
// Ans="Users\jackson"

var path = require('path')
console.log(path.join('Users','Refsnes'))
// Ans="Users\Refsnes"

var path = require('path')
console.log(path.resolve('Users','abc'))
// Ans="C:\Users\ASUS\Documents\SEM_3\WEB_TECNOLOGY\NODE_PROJECTS\Path_Core_Module\Users\abc"

var path = require('path')
console.log(path.relative('Users','nodeproject'))
// Ans="..\nodeproject"

var path = require('path')
console.log(path.extname('Node/Users.Js'))
// Ans=".Js"