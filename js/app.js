let items = [];

let elements = document.getElementsByClassName("row");
let priority = document.getElementsByClassName("priority-button");
let text = document.getElementsByClassName("text");
let done = document.getElementsByClassName("completed-button");
let remove = document.getElementsByClassName("remove-button");

let priorityChanged;
let completionChanged;
let itemRemoved;





window.onload = function() {
    document.getElementById("tasks").onmouseover = runModificationFunctions;

    document.getElementById("addButton").onclick = createItem;
};





const prioritizeItem = function() {
    priorityChanged = false;

    for (let i = 0; i < priority.length; i++) {
        priority[i].onclick = function() {
            if (items[i].prioritized === false) {
                const elementToPrioritize = elements[i];
                priority[i].style.color = "yellow";
                elements[0].before(elementToPrioritize);
                items[i].prioritized = true;

                const objectToMove = items[i];
                items.splice(i, 1);
                items.unshift(objectToMove);
                priorityChanged = true;
            }
            else if (items[i].prioritized) {
                const elementToPrioritize = elements[i];
                priority[i].style.color = "white";
                elements[elements.length - 1].after(elementToPrioritize);
                items[i].prioritized = false;

                const objectToMove = items[i];
                items.splice(i, 1);
                items.push(objectToMove);
                priorityChanged = true;
            }
        };

        if (priorityChanged) {
            break;
        }
    }
};





const markAsComplete = function() {
    completionChanged = false;

    for (let i = 0; i < done.length; i++) {
        done[i].onclick = function() {
            if (items[i].completed === false) {
                text[i].style.setProperty("text-decoration", "line-through");
                text[i].style.color = "#32CD32";
                items[i].completed = true;
            }
            else if (items[i].completed) {
                text[i].style.setProperty("text-decoration", "none");
                text[i].style.color = "white";
                items[i].completed = false;
            }
        };

        if (priorityChanged) {
            break;
        }
    }
};






const removeItem = function() {
    itemRemoved = false;

    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            const elementToRemove = elements[i];
            elementToRemove.remove();
            items.splice(i, 1);
            itemRemoved = true;
        };

        if (itemRemoved) {
            break;
        }
    }
}





const runModificationFunctions = function() {
    prioritizeItem();
    markAsComplete();
    removeItem();
};





const createItem = function() {
    let input = document.getElementById("textbox").value;
    if (input === "") {}
    else {
        let object = {
            task: input,
            prioritized: false,
            completed: false,
            htmlRow: null,
            htmlPriority: null,
            htmlText: null,
            htmlDone: null,
            htmlCheck: null,
            htmlRemove: null
        }

        items.push(object);

        let x = items.indexOf(object);

        items[x].htmlRow = document.createElement("tr");
        items[x].htmlRow.setAttribute("class", "row");
        document.getElementById("tasks").append(items[x].htmlRow);

        items[x].htmlPriority = document.createElement("td");
        items[x].htmlPriority.setAttribute("class", "priority-button");
        items[x].htmlPriority.innerHTML = "&#10071";
        elements[x].append(items[x].htmlPriority);

        items[x].htmlText = document.createElement("td");
        items[x].htmlText.innerHTML = items[x].task;
        items[x].htmlText.setAttribute("class", "text");
        elements[x].append(items[x].htmlText);

        items[x].htmlDone = document.createElement("td");
        items[x].htmlDone.setAttribute("class", "completed-button");
        elements[x].append(items[x].htmlDone);

        items[x].htmlCheck = document.createElement("td");
        items[x].htmlCheck.setAttribute("class", "check");
        items[x].htmlCheck.innerHTML = "&#x2714";
        done[x].append(items[x].htmlCheck);

        items[x].htmlRemove = document.createElement("td");
        items[x].htmlRemove.setAttribute("class", "remove-button");
        items[x].htmlRemove.innerHTML = "&#10060";
        elements[x].append(items[x].htmlRemove);
    }
    document.getElementById("textbox").value = "";
};

/*window.onload = function() {
    document.getElementById("add-button").onclick = additems;
}
let priority = document.getElementsByClassName("priority_button");
let complete = document.getElementsByClassName("complete_button");
let remove = document.getElementsByClassName("remove_button");
let list_item = document.getElementsByClassName("to_do")
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


  /*for (let i = 0; i < items.length; i++) {

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



  const span1 = document.createElement("span");
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

list.append(list_item);



const check = function(identity) {
  document.getElementById(identity).style.color = 'lime';
};
};
*/
