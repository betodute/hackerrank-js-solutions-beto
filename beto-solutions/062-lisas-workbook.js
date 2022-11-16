function workbook(n, k, arr) {
  let page = 0, specialProb = 0
  
  for(let cap of arr) {
      page++
      for (let problem = 1; problem <= cap; problem++) {
          if (problem === page) {
              specialProb++
          };
          if (problem % k === 0 && problem < cap) {
              page++
          };
      };
  };
  return specialProb
};