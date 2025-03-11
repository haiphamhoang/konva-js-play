// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 500,
    height: 500,
    // draggable: true
  });
  
// then create layer
var layer = new Konva.Layer();

var rect1 = new Konva.Rect({
x: 10,
y: 10,
width: 300,
height: 100,
stroke: '#f4cc50',
strokeWidth: 4,
});
// add the shape to the layer
layer.add(rect1);

//san khau
var complexText = new Konva.Text({
    x: 10,
    y: 10,
    text: "SÂN KHẤU",
    fontSize: 20,
    fill: ' #e49b08 ',
    width: 300,
    padding: 25,
    align: 'center',
  });

layer.add(complexText);

var rect2 = new Konva.Rect({
    x: 135,
    y: 110,
    width: 50,
    height: 250,
    stroke: '#f4cc50',
    strokeWidth: 4
});
// add the shape to the layer
layer.add(rect2);


rect3a = new Konva.Rect({
    x: 10,
    y: 110,
    width: 125,
    height: 150,
    stroke: 'black',
});

rect3b = new Konva.Rect({
    x: 185,
    y: 110,
    width: 125,
    height: 150,
    stroke: 'black',
});

rect3c = new Konva.Rect({
    x: 10,
    y: 260,
    width: 125,
    height: 100,
    stroke: 'black',
});

rect3d = new Konva.Rect({
    x: 185,
    y: 260,
    width: 125,
    height: 100,
    stroke: 'black',
});

layer.add(rect3a);
layer.add(rect3b);
layer.add(rect3c);
layer.add(rect3d);


// seat
var seatGroupA = new Konva.Group({
    x: 40,
    y: 130,
});

var seatGroupB = new Konva.Group({
    x: 210,
    y: 130,
});

var seatGroupC = new Konva.Group({
    x: 40,
    y: 290,
});

var seatGroupD = new Konva.Group({
    x: 210,
    y: 290,
});

for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 3; i++) {
        var box = new Konva.Circle({
            x: i * 35,
            y: j * 35,
            radius: 10,
            name: 'Seat ' + i,
            fill: 'white',
            stroke: 'black',
        });

        seatGroupA.add(box);        
    }
}

for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 3; i++) {
        var box = new Konva.Circle({
            x: i * 35,
            y: j * 35,
            radius: 10,
            name: 'Seat ' + i,
            fill: 'white',
            stroke: 'black',
        });

        seatGroupB.add(box);        
    }
}

for (var j = 0; j < 2; j++) {
    for (var i = 0; i < 3; i++) {
        var box = new Konva.Circle({
            x: i * 35,
            y: j * 35,
            radius: 10,
            name: 'Seat ' + i,
            fill: 'white',
            stroke: 'black',
        });

        seatGroupC.add(box);        
    }
}

for (var j = 0; j < 2; j++) {
    for (var i = 0; i < 3; i++) {
        var box = new Konva.Circle({
            x: i * 35,
            y: j * 35,
            radius: 10,
            name: 'Seat ' + i,
            fill: 'white',
            stroke: 'black',
        });

        seatGroupD.add(box);        
    }
}


layer.add(seatGroupA);
layer.add(seatGroupB);
layer.add(seatGroupC);
layer.add(seatGroupD);


// add the circle to the layer
layer.draw();
stage.add(layer);