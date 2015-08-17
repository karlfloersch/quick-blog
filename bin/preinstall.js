/*
 * Script written by Marc Harter on StrangeLoop
 * https://strongloop.com/strongblog/modular-node-js-express/
 *
 * Goes through all of the sub directories in lib and installed
 * the packages dependencies
 */

var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var cp = require('child_process');
 
// get library path
var lib = resolve(__dirname, '../lib/');
 
fs.readdirSync(lib)
  .forEach(function (mod) {
    var modPath = join(lib, mod);
 
    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) return;
 
    // install folder
    cp.spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' });
  });
