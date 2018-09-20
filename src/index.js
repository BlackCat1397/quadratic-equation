module.exports = function solveEquation(equation) {
  // your implementation
  const regex = / /g;
  equation = equation.replace(regex, '');

  let parts = equation.split('*x^2');
  let a = Number(parts[0]);
  let b = parts[1].split('*x');
  let c = Number(b[1]);
  b = Number(b[0]);
  let d = Math.round(Math.sqrt(b*b-4*a*c));

  let res = [(-1*b - d)/(2*a), (-1*b + d)/(2*a)];
  return a > 0 ? res : res.reverse();
}
