window.onload = function() {

    document.getElementById("add-button").onclick = additems;

}



const items = [];



const additems = function() {

  const text = document.getElementById("textbox").value;



  const item = {

    id: items.length + 1,

    priority: "low",

    content: text,

    complete: false

  };

  items.push(item);



  document.getElementById("textbox").value = "";



  renderItems();

};



const renderItems = function() {

  const list = document.getElementById("list");

  list.innerHTML = "";



  for (let i = 0; i < items.length; i++) {

    const li = document.createElement("li");

    const span1 = document.createElement("span");

    const span2 = document.createElement("span");

    const span3 = document.createElement("span");

    const span4 = document.createElement("span");



    span1.innerHTML = items[i].content;

//    span2.innerHTML = "~!";

  //  span3.innerHTML = "&#10004;";

    span3.className = items[i].complete === true ? "done" : "not-done";

//    span4.innerHTML = "&#10006;";

  //  span4.id = "delete-" + items[i].id;

    li.append(span1);

    li.append(span2);

    li.append(span3);

    li.append(span4);

    list.append(li);

  }

};
