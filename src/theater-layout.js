import THEATER_CONFIG from './theater-config.js';

export function createStageArea(layer) {
  const stageConfig = THEATER_CONFIG.stage.stageArea;
  
  const stageRect = new Konva.Rect({
    x: stageConfig.x,
    y: stageConfig.y,
    width: stageConfig.width,
    height: stageConfig.height,
    stroke: stageConfig.stroke,
    strokeWidth: stageConfig.strokeWidth,
  });
  
  const stageText = new Konva.Text({
    x: stageConfig.x,
    y: stageConfig.y,
    text: stageConfig.text,
    fontSize: stageConfig.fontSize,
    fill: stageConfig.textColor,
    width: stageConfig.width,
    padding: 25,
    align: 'center',
  });
  
  layer.add(stageRect);
  layer.add(stageText);
}

export function createWalkway(layer) {
  const walkwayConfig = THEATER_CONFIG.walkway;
  
  const walkway = new Konva.Rect({
    x: walkwayConfig.x,
    y: walkwayConfig.y,
    width: walkwayConfig.width,
    height: walkwayConfig.height,
    stroke: walkwayConfig.stroke,
    strokeWidth: walkwayConfig.strokeWidth
  });
  
  layer.add(walkway);
}

export function createSectionBoundaries(layer) {
  const { sections } = THEATER_CONFIG;
  
  Object.entries(sections.positions).forEach(([sectionId, position]) => {
    const dimensions = sections.dimensions[position.type];
    
    const sectionRect = new Konva.Rect({
      x: position.x,
      y: position.y,
      width: dimensions.width,
      height: dimensions.height,
      stroke: 'black',
    });
    
    layer.add(sectionRect);
  });
} 