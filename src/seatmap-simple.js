import THEATER_CONFIG from './theater-config.js';
import { createStageArea, createWalkway, createSectionBoundaries } from './theater-layout.js';
import { createAllSeats } from './seating.js';

// Create stage
const stage = new Konva.Stage({
  container: 'container',
  width: THEATER_CONFIG.stage.width,
  height: THEATER_CONFIG.stage.height,
});

// Create layer
const layer = new Konva.Layer();

// Create status text for selected seat
const statusText = new Konva.Text({
  x: 20,
  y: THEATER_CONFIG.stage.height - 200,
  text: 'Chưa chọn ghế nào',
  fontSize: 30,
  fill: '#000',
  id: 'selectedSeatStatus',
  width: 500
});
layer.add(statusText);

// Create theater layout
createStageArea(layer);
createWalkway(layer);
createSectionBoundaries(layer);

// Create seats
createAllSeats(layer);

// Finalize
layer.draw();
stage.add(layer);