var addButton = document.querySelector("input[type='submit']")

var input =  document.querySelector("#item-name")

var shopList = document.querySelector("#shopping-list")

function addItemToList(itemContent,list) {
    var li = document.createElement("li");
    var p = document.createElement("p");
    var button = document.createElement("button")
    p.innerHTML = itemContent
    button.innerHTML = "删除"
    li.append(p)
    li.append(button)
    // button.addEventListener("click",()=>{
    //     li.remove()
    // })
    list.insertAdjacentElement('afterbegin', li)
}

addButton.addEventListener("click",(e)=>{
   e.preventDefault();
   if(input.value.trim() !== ""){
   addItemToList(input.value , shopList);
   input.value = "";
   }
})

shopList.addEventListener("click",(e)=>{
    e.target.parentNode.remove();
})