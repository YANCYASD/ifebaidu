var input = document.querySelector("input");

var data = [
  { name: "Amy", phone: "1025151111" },
  { name: "Amya", phone: "1235151111" },
  { name: "Amyb", phone: "225151111" },
  { name: "Amyc", phone: "335151111" },
  { name: "Amyd", phone: "445151111" },
  { name: "Amye", phone: "555151111" },
  { name: "Amyf", phone: "6665151111" },
  { name: "Amyg", phone: "2345151111" },
  { name: "Amyh", phone: "1555151111" },
  { name: "Amyi", phone: "1455151111" },
];

function initList(list) {
  var ul = document.querySelector(".list ul");
  var LIST = document.querySelector(".list");
  ul.innerHTML = "";
  list.forEach((element) => {
    var li = document.createElement("li");
    var i1 = document.createElement("i");
    i1.innerHTML = "X";
    var i2 = document.createElement("i");
    i2.innerHTML = "X";
    var nameSpan = document.createElement("span");
    var phoneSpan = document.createElement("span");
    nameSpan.innerHTML = element.name;
    phoneSpan.innerHTML = element.phone;
    var div = document.createElement("div");
    div.append(i1);
    div.append(phoneSpan);
    li.append(i2);
    li.append(nameSpan);
    li.append(div);
    ul.append(li);
  });
}

initList(data);

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  let s = e.target.value;
  let newList = data.filter((item) => {
    return item.name.includes(s) || item.phone.includes(s);
  });
  initList(newList);
});
