$(function() {
 /* to color elements we use the class name ( slugigy(name) ) */
var domain = data.map(function(d){ return slugify(d.name); })
var range = ["#34a853", "#c99703", "#FBBC04",  "#fde59b", "#0b51c1", "#4285f4", "#b7d1fb", "#EA4335"]
var palette = d3.scale.ordinal().domain(domain).range(range);  
   
var chart2 = d3waffle().rows(10)                  .scale(1).height(500).colorscale(palette)
;       d3.select("#container-2")
          .datum(data)
          .call(chart2);
              });

      var data = [
        { "name": "Fully Automated - RSA, SB & BM (20%)", "value": 20},
        { "name": "BM + SB (15%)", "value": 15},
        { "name": "BM + RSA (10%)", "value": 10},
        { "name": "SB + RSA (5%)", "value": 5},
        { "name": "Only SB (10%)", "value": 10},
        { "name": "Only RSA (15%)", "value": 15},
        { "name": "Only BM (10%)", "value": 25},
        { "name": "Missing RSA, SB & BM  (15%)", "value": 0}
      ];