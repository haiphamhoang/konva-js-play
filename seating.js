import THEATER_CONFIG from './theater-config.js';

function createSeat(x, y, seatNumber) {
  const seatConfig = THEATER_CONFIG.seat;
  
  return new Konva.Circle({
    x,
    y,
    radius: seatConfig.radius,
    name: `Seat ${seatNumber}`,
    fill: seatConfig.fill,
    stroke: seatConfig.stroke,
  });
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