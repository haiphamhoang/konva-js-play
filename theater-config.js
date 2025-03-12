const THEATER_CONFIG = {
  stage: {
    width: 500,
    height: 500,
    stageArea: {
      x: 10,
      y: 10,
      width: 300,
      height: 100,
      stroke: '#f4cc50',
      strokeWidth: 4,
      text: 'SÂN KHẤU',
      fontSize: 20,
      textColor: '#e49b08'
    }
  },
  walkway: {
    x: 135,
    y: 110,
    width: 50,
    height: 250,
    stroke: '#f4cc50',
    strokeWidth: 4
  },
  sections: {
    dimensions: {
      regular: { width: 125, height: 150 },
      small: { width: 125, height: 100 }
    },
    positions: {
      A: { x: 10, y: 110, type: 'regular', rows: 4, seatsPerRow: 3 },
      B: { x: 185, y: 110, type: 'regular', rows: 4, seatsPerRow: 3 },
      C: { x: 10, y: 260, type: 'small', rows: 2, seatsPerRow: 3 },
      D: { x: 185, y: 260, type: 'small', rows: 2, seatsPerRow: 3 }
    }
  },
  seat: {
    radius: 10,
    fill: 'white',
    stroke: 'black',
    spacing: 35
  }
};

export default THEATER_CONFIG; 