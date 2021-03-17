//question 1
function question1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    let check = 0;
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[i] == arr2[j]) {
        arr2.splice(j, 1);
        j--;
        check = 1;
      }
    }
    if (check == 1) {
      arr2.splice(i, 1);
      i--;
    }
  }
  return arr2;
}
console.log(question1([1, 2, 4, 5], [3, 2, 5]));

function question2(arr) {
  arr.sort(function (a, b) {
    if (b.point - a.point == 0) {
      if (a.GD - b.GD == 0) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else {
        return a.GD - b.GD;
      }
    } else {
      return b.point - a.point;
    }
  });
  return arr;
}
console.log(
  question2([
    { name: 'Arsenal', point: 99, GD: 45 },
    { name: 'Chelsea', point: 75, GD: 39 },
    { name: 'Liverpool', point: 88, GD: 39 },
  ])
);
