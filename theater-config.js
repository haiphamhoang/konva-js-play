const THEATER_CONFIG = {
  stage: {
    width: 1000,
    height: 1000,
    stageArea: {
      x: 20,
      y: 20,
      width: 600,
      height: 200,
      stroke: '#f4cc50',
      strokeWidth: 4,
      text: 'SÂN KHẤU',
      fontSize: 40,
      textColor: '#e49b08'
    }
  },
  walkway: {
    x: 270,
    y: 220,
    width: 100,
    height: 500,
    stroke: '#f4cc50',
    strokeWidth: 4
  },
  sections: {
    dimensions: {
      regular: { width: 250, height: 300 },
      small: { width: 250, height: 200 }
    },
    positions: {
      A: { x: 20, y: 220, type: 'regular', rows: 4, seatsPerRow: 3, offsetBorderX: 70 },
      B: { x: 370, y: 220, type: 'regular', rows: 4, seatsPerRow: 3, offsetBorderX: 40 },
      C: { x: 20, y: 520, type: 'small', rows: 2, seatsPerRow: 3, offsetBorderX: 70 },
      D: { x: 370, y: 520, type: 'small', rows: 2, seatsPerRow: 3, offsetBorderX: 40 }
    }
  },
  seat: {
    radius: 30,
    fill: 'white',
    stroke: 'black',
    spacing: 70,
    offsetBorderX: 40,
    offsetBorderY: 10,

  }
};

export default THEATER_CONFIG; 