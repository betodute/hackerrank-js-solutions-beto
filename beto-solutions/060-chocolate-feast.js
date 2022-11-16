function chocolateFeast(n, c, m) {
  let cont = 0;
  let barras_iniciales = Math.floor(n/c);
  let barras_nuevas = Math.floor(barras_iniciales/m);
  
  if (barras_iniciales < m) {
    barras_nuevas = 0;
    return barras_iniciales;
  }

  cont = barras_iniciales + barras_nuevas;
  let papeles = barras_iniciales;
  
  while (papeles >= m) {   
    papeles = Math.floor(papeles / m)+(papeles % m);
    cont += Math.floor(papeles / m);
  };
  
  return cont;
};