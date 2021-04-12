// var edge_1 = (Number(prompt("Enter edge: ")) * Math.PI) / 180;
// var edge_2 = (Number(prompt("Enter edge: ")) * Math.PI) / 180;
// var angle_1 = (Number(prompt("Enter angle: ")) * Math.PI) / 180;

// angle_1 = Math.sqrt(
//   Math.pow(edge_1, 2) +
//     Math.pow(edge_1, 2) -
//     2 * edge_1 * edge_2 * Math.cos(angle_1)
// );

// console.log(angle_1);

var array = [25345, 6564, "hello", true, 2];
console.log(array[2]);

array.push("quang");
console.log(array[6]);
array[6] = "a hung";
array.splice(3, 0, "Minh", "Quang", "Bình");
console.log(array);

var me = {
  firstName: "Hồ",
  lastName: "Minh Quang",
  age: 12,
  ny: false,
  glasses: "black",
  laptop: "dell",
  tShirt: "white",
};
console.log(me.ny);
console.log(me["ny"]);
me.ny = true;
console.log(me.ny);
console.log(me["ny"]);
delete me.ny;

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// BTVN
// tạo 1 form đăng ký đăng nhập
// Ôn tập về DOM và các câu lệnh liên quan VD: document.query...
// addeventlistener:
// .style.background = "red"
// onclick
// onhover
// classlist.add / classlist.remove / classlist.toggle
// Localstorage
// innerText vs innerHTML
