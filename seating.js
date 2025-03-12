import THEATER_CONFIG from './theater-config.js';

function createSeat(x, y, seatNumber) {
  const seatConfig = THEATER_CONFIG.seat;
  
  // Create a group to hold both circle and text
  const seatGroup = new Konva.Group();
  
  // Create the seat circle
  const circle = new Konva.Circle({
    x: 0,
    y: 0,
    radius: seatConfig.radius,
    name: `Seat ${seatNumber + 1}`,
    fill: seatConfig.fill,
    stroke: seatConfig.stroke,
  });

  // Create the seat number text
  const text = new Konva.Text({
    x: -seatConfig.radius / 2,
    y: -seatConfig.radius / 3,
    text: (seatNumber + 1).toString(),
    fontSize: seatConfig.radius * 0.8,
    fill: '#000',
    width: seatConfig.radius,
    align: 'center',
  });

  // Function to handle seat selection
  const handleSeatSelect = () => {
    circle.fill('green');
    circle.getLayer().draw();
  };

  // Add click and touch handlers to both circle and text
  circle.on('click tap', handleSeatSelect);
  text.on('click tap', handleSeatSelect);

  // Add both circle and text to the group
  seatGroup.add(circle);
  seatGroup.add(text);
  
  // Position the group
  seatGroup.position({ x, y });
  
  return seatGroup;
}

function createSeatGroup(sectionId) {
  const section = THEATER_CONFIG.sections.positions[sectionId];
  const spacing = THEATER_CONFIG.seat.spacing;
  
  const seatGroup = new Konva.Group({
    x: section.x + 30, // Offset from section border
    y: section.y + 20, // Offset from section border
  });
  
  for (let row = 0; row < section.rows; row++) {
    for (let seat = 0; seat < section.seatsPerRow; seat++) {
      const seatNumber = row * section.seatsPerRow + seat;
      const seatNode = createSeat(
        seat * spacing,
        row * spacing,
        seatNumber
      );
      seatGroup.add(seatNode);
    }
  }
  
  return seatGroup;
}

export function createAllSeats(layer) {
  Object.keys(THEATER_CONFIG.sections.positions).forEach(sectionId => {
    const seatGroup = createSeatGroup(sectionId);
    layer.add(seatGroup);
  });
} 