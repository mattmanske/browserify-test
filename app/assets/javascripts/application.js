// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

var Shallow_JS     = require('components/test_js');
var Shallow_Coffee = require('components/test_coffee');
var Deep_JS        = require('components/project/test_js');
var Deep_Coffee    = require('components/project/test_coffee');

console.log(Shallow_JS);
console.log(Shallow_Coffee);
console.log(Deep_JS); 
console.log(Deep_Coffee);
