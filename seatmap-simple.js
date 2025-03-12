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

// Create theater layout
createStageArea(layer);
createWalkway(layer);
createSectionBoundaries(layer);

// Create seats
createAllSeats(layer);

// Finalize
layer.draw();
stage.add(layer);