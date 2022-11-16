function serviceLane(width, cases) {
  let widestVehicles = [];
  cases.forEach((casePair) => {
      let laneSegment = width.slice(casePair[0], casePair[1] + 1);
      widestVehicles.push(Math.min(...laneSegment));
  });
  return widestVehicles;
};