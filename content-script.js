(function() {
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.height = '100%';
  div.style.width = '100%';
  div.style.top = '0px';
  div.style.cursor = 'crosshair';
  div.style['left'] = '0px';
  div.style['background-color'] = "#ffffff";
  div.style['opacity'] = '0.3';

  var x = 0;
  var y = 0;

  div.onmousedown = function(e) {
    x = e.clientX;
    y = e.clientY;
  };

  div.onmouseup = function(e) {
    var dist =
        Math.sqrt(Math.pow((e.clientX - x), 2) + Math.pow((e.clientY - y), 2));

    var units = 'pixels';
    var ratio = 1.0;
    var mapScaleLabel = document.getElementById('widget-scale-label');
    var mapScales = document.getElementsByClassName('widget-scale-bottomleft');
    if (mapScaleLabel && mapScales) {
      var mapScaleDenominator = parseInt(mapScales[0].style.width, 10) + 4;
      var mapScaleNumerator = parseInt(mapScaleLabel.innerText, 10);
      ratio = mapScaleNumerator / mapScaleDenominator;
      units = mapScaleLabel.innerText.split(' ')[1];
    }
    dist = Math.round(100 * dist * ratio) / 100;

    alert(dist + ' ' + units);
    document.body.removeChild(div);
  };

  document.body.appendChild(div);
})();
