// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 500,
    height: 500,
    // draggable: true
  });
  
  // then create layer
  var layer = new Konva.Layer();


  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
  });

  // circle.on('xChange', function() {
  //   alert('position change');
  // });
  circle.draggable('true');

  circle.on('dragend', function() {
    alert('drag stopped');
  });

  circle.on('mouseout touchend', function() {
    alert('user input');
  });

  // add the circle to the layer
  var circle2 = new Konva.Circle({
    x: stage.width(),
    y: stage.height(),
    radius: 70,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 4
  });
  
  var triangle = new Konva.Shape({
    sceneFunc: function(context) {
      context.beginPath();
      context.moveTo(20, 50);
      context.lineTo(220, 80);
      context.quadraticCurveTo(150, 100, 260, 170);
      context.closePath();

      // special Konva.js method
      context.fillStrokeShape(this);
    },
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4
  });


  /*
       * create a group which will be used to combine
       * multiple simple shapes.  Transforming the group will
       * transform all of the simple shapes together as
       * one unit
       */
  var group = new Konva.Group({
    x: 120,
    y: 40,
    rotation: 50,
  });

  var colors = ['red', 'orange', 'yellow'];

  for (var i = 0; i < 3; i++) {
    var box = new Konva.Rect({
      x: i * 30,
      y: i * 18,
      width: 100,
      height: 50,
      name: colors[i],
      fill: colors[i],
      stroke: 'black',
      strokeWidth: 4,
    });

    group.add(box);
  }

  layer.add(group);


  // add the shape to the layer
  layer.add(circle);
  layer.add(circle2);
  layer.add(triangle);

  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();

  layer.find('Circle'); // returns array of all circles

  var json = stage.toJSON();
  console.log(json);

  