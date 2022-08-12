module.exports = function towelSort (matrix) {

  let frstArr = [];
  let sortArr = [];

  if (matrix === undefined) {
    return sortArr
  };
  if (matrix.length == 0) {
    return sortArr
  };

for (let i=0; i < matrix.length; i++) {
  if ((i == 0) || (i%2 == 0)) {
    frstArr.push(matrix[i])
  } else {
    frstArr.push(matrix[i].sort((a,b) => b - a))
  }
}

sortArr = frstArr.reduce(function(a,b) {return a.concat(b)})

return sortArr

}
