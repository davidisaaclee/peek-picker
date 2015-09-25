(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var makeBox, picker, randomColor;

picker = document.querySelector('#picker');

randomColor = function() {
  var alpha, random8bit;
  random8bit = function() {
    return Math.floor(Math.random() * 256);
  };
  alpha = Math.max(Math.random(), 0.2);
  return "rgba(" + (random8bit()) + ", " + (random8bit()) + ", " + (random8bit()) + ", " + (Math.random());
};

makeBox = function(width, height, color) {
  var r;
  r = document.createElement('div');
  r.style.width = width + "px";
  r.style.height = height + "px";
  r.style.display = 'inline-block';
  if (color == null) {
    color = randomColor();
  }
  r.style['background-color'] = color;
  return r;
};

picker.setElements({
  elt1: makeBox(200, 100),
  elt2: makeBox(100, 200),
  elt3: makeBox(10, 200),
  elt4: makeBox(200, 10)
});

Polymer.Gestures.add(document, 'down', function() {
  return picker.show();
});

picker.addEventListener('select', function(evt) {
  return console.log('select:', evt.detail);
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvcGVlay1waWNrZXIvc3JjL2RlbW8vcGVlay1waWNrZXItZGVtby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOztBQUFBLE1BQUEsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2Qjs7QUFFVCxXQUFBLEdBQWMsU0FBQTtBQUNaLE1BQUE7RUFBQSxVQUFBLEdBQWEsU0FBQTtXQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEdBQTNCO0VBQUg7RUFDYixLQUFBLEdBQVEsSUFBSSxDQUFDLEdBQUwsQ0FBYSxJQUFJLENBQUMsTUFBUixDQUFBLENBQVYsRUFBMkIsR0FBM0I7QUFDUixTQUFPLE9BQUEsR0FBTyxDQUFJLFVBQUgsQ0FBQSxDQUFELENBQVAsR0FBc0IsSUFBdEIsR0FBeUIsQ0FBSSxVQUFILENBQUEsQ0FBRCxDQUF6QixHQUF3QyxJQUF4QyxHQUEyQyxDQUFJLFVBQUgsQ0FBQSxDQUFELENBQTNDLEdBQTBELElBQTFELEdBQTZELENBQUksSUFBSSxDQUFDLE1BQVIsQ0FBQSxDQUFEO0FBSHhEOztBQUtkLE9BQUEsR0FBVSxTQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCO0FBQ1IsTUFBQTtFQUFBLENBQUEsR0FBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtFQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBUixHQUFtQixLQUFELEdBQU87RUFDekIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFSLEdBQW9CLE1BQUQsR0FBUTtFQUMzQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQVIsR0FBa0I7RUFDbEIsSUFBTyxhQUFQO0lBQ0UsS0FBQSxHQUFXLFdBQUgsQ0FBQSxFQURWOztFQUVBLENBQUMsQ0FBQyxLQUFNLENBQUEsa0JBQUEsQ0FBUixHQUE4QjtBQUM5QixTQUFPO0FBUkM7O0FBVVYsTUFBTSxDQUFDLFdBQVAsQ0FDRTtFQUFBLElBQUEsRUFBTSxPQUFBLENBQVEsR0FBUixFQUFhLEdBQWIsQ0FBTjtFQUNBLElBQUEsRUFBTSxPQUFBLENBQVEsR0FBUixFQUFhLEdBQWIsQ0FETjtFQUVBLElBQUEsRUFBTSxPQUFBLENBQVEsRUFBUixFQUFZLEdBQVosQ0FGTjtFQUdBLElBQUEsRUFBTSxPQUFBLENBQVEsR0FBUixFQUFhLEVBQWIsQ0FITjtDQURGOztBQU1BLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0IsTUFBL0IsRUFBdUMsU0FBQTtTQUFNLE1BQU0sQ0FBQyxJQUFQLENBQUE7QUFBTixDQUF2Qzs7QUFDQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBQyxHQUFEO1NBQ2hDLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixHQUFHLENBQUMsTUFBM0I7QUFEZ0MsQ0FBbEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAnI3BpY2tlcidcblxucmFuZG9tQ29sb3IgPSAoKSAtPlxuICByYW5kb204Yml0ID0gLT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KVxuICBhbHBoYSA9IE1hdGgubWF4IChkbyBNYXRoLnJhbmRvbSksIDAuMlxuICByZXR1cm4gXCJyZ2JhKCN7ZG8gcmFuZG9tOGJpdH0sICN7ZG8gcmFuZG9tOGJpdH0sICN7ZG8gcmFuZG9tOGJpdH0sICN7ZG8gTWF0aC5yYW5kb219XCJcblxubWFrZUJveCA9ICh3aWR0aCwgaGVpZ2h0LCBjb2xvcikgLT5cbiAgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2RpdidcbiAgci5zdHlsZS53aWR0aCA9IFwiI3t3aWR0aH1weFwiXG4gIHIuc3R5bGUuaGVpZ2h0ID0gXCIje2hlaWdodH1weFwiXG4gIHIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gIGlmIG5vdCBjb2xvcj9cbiAgICBjb2xvciA9IGRvIHJhbmRvbUNvbG9yXG4gIHIuc3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IGNvbG9yXG4gIHJldHVybiByXG5cbnBpY2tlci5zZXRFbGVtZW50c1xuICBlbHQxOiBtYWtlQm94IDIwMCwgMTAwXG4gIGVsdDI6IG1ha2VCb3ggMTAwLCAyMDBcbiAgZWx0MzogbWFrZUJveCAxMCwgMjAwXG4gIGVsdDQ6IG1ha2VCb3ggMjAwLCAxMFxuXG5Qb2x5bWVyLkdlc3R1cmVzLmFkZCBkb2N1bWVudCwgJ2Rvd24nLCAoKSAtPiBwaWNrZXIuc2hvdygpXG5waWNrZXIuYWRkRXZlbnRMaXN0ZW5lciAnc2VsZWN0JywgKGV2dCkgLT5cbiAgY29uc29sZS5sb2cgJ3NlbGVjdDonLCBldnQuZGV0YWlsIl19
