function addTodo() {
    const input = document.getElementById("todoInput");
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const text = input.value.trim();
  
    if (text !== "") {
      const todoList = document.getElementById("todoList");
  
      const card = document.createElement("div");
      card.className = "todo-card";
  
      const todoText = document.createElement("span");
      todoText.innerText = text;
  
      const timeStamp = document.createElement("div");
      timeStamp.className = "timestamp";
      const now = new Date();
      timeStamp.innerText = "Created at: " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
      const timeRange = document.createElement("div");
      timeRange.className = "timestamp";
      if (startTime && endTime) {
        timeRange.innerText = `⏰ Time: ${startTime} - ${endTime}`;
      } else {
        timeRange.innerText = `⏰ Time not set`;
      }
  
      const actions = document.createElement("div");
      actions.className = "card-actions";
  
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.className = "small-btn";
      editBtn.onclick = () => {
        const newText = prompt("Edit your TODO:", todoText.innerText);
        if (newText) {
          todoText.innerText = newText;
        }
      };
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "small-btn";
      deleteBtn.style.marginLeft = "10px"; // Adds gap between buttons
      deleteBtn.onclick = () => {
        card.remove();
      };
  
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
  
      card.appendChild(todoText);
      card.appendChild(timeRange);
      card.appendChild(timeStamp);
      card.appendChild(actions);
      todoList.appendChild(card);
  
      input.value = "";
      document.getElementById("startTime").value = "";
      document.getElementById("endTime").value = "";
    }
  }
  