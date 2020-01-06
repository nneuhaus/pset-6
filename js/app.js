window.onload = function() {
    document.getElementById("add-button").onclick = additems;
}
const items = [];

const additems = function() {

  const text = document.getElementById("textbox").value;

  const item = {

    id: items.length + 1,

    content: text,

    complete: false

  };

if (text.length >= 1) {
  items.push(item);
};


  document.getElementById("textbox").value = "";



  renderItems();

};



const renderItems = function() {

  const list = document.getElementById("list");

  list.innerHTML = "";


  for (let i = 0; i < items.length; i++) {

    const button0 = document.createElement("button");

    button0.setAttribute("identity", i);

    button0.innerHTML = "<button onclick='priority(identity)'>&#10071;</button>";

    const li = document.createElement("li");

    li.id = i;

    li.innerHTML = items[i].content;

    li.prepend(button0);

    const button1 = document.createElement("button");

    button1.setAttribute("identity", i);

    button1.innerHTML = "<button onclick='check(identity)'>&#x2714;</button>";

    li.appendChild(button1);

    const button2 = document.createElement("button");

    button1.setAttribute("identity", i);

    button2.innerHTML = "<button onclick='remove(identity)'>&#10060;</button>"

    li.appendChild(button2);



    /*const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    span1.innerHTML = "!    ";
    span2.innerHTML = items[i].content;
    span3.innerHTML = "           &#10004;";
    span3.className = items[i].complete === true ? "done" : "not-done";
    span4.innerHTML = "          &#10006;";
    span4.id = "delete-" + items[i].id;
    li.append(span1);
    li.append(span2);
    li.append(span3);
    li.append(span4);
    */
    list.append(li);

  };

};

const check = function(identity) {
  document.getElementById(identity).style.color = 'lime';
};
