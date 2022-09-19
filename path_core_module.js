// "PATH_CORE_MODULE":

// 1)basename:
var path = require('path')
console.log(path.basename('/Users/Refsnes/demo_path.js'))
// Ans="demo_path.js"

// 2)dirname:
var path = require('path')
console.log(path.dirname('/Users/Refsnes/demo_path.js'))
// Ans="/Users/Refsnes"

// 3)normalize:
var path = require('path')
console.log(path.normalize('Users/Refsnes/../jackson'))
// Ans="Users\jackson"

// 4)join:
var path = require('path')
console.log(path.join('Users','Refsnes'))
// Ans="Users\Refsnes"

// 5)resolve:
var path = require('path')
console.log(path.resolve('Users','abc'))
// Ans="C:\Users\ASUS\Documents\SEM_3\WEB_TECNOLOGY\NODE_PROJECTS\Path_Core_Module\Users\abc"

// 6)relative:
var path = require('path')
console.log(path.relative('Users','nodeproject'))
// Ans="..\nodeproject"

// 7)extname:
var path = require('path')
console.log(path.extname('Node/Users.Js'))
// Ans=".Js"