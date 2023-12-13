// import { taskDetails } from './task-Details.js'

const textInput = document.getElementById("textInput");
const cancel = document.getElementById("cancel");
const description = document.querySelectorAll(".description");
const errorMessage = document.getElementById("errorMessage");
const todoTable = document.getElementById("todoTable");
const inputedErrorText = document.getElementById("inputedErrorText");
const activeButton =document.getElementById('active-Btn')


// STATE
 const taskDetails = {
  taskList: [
    {
      sn: 1,
      description: "Do some shopping at maxLand shopping mall",
      status: "done",
      date: "6th Nov, 2023",
      priority: "high",
    },
    {
      sn: 2, description: "	Read my books", status: "done", date: "7th Nov, 2023", priority: "low",
    },
    {
      sn: 3, description: "	Visit my family", status: "todo", date: "8th Nov, 2023", priority: "high",
    },
    {
      sn: 4, description: "	Relearn my codes", status: "in progress", date: "9th Nov, 2023", priority: "medium",
    },
    {
      sn: 5, description: "	Listen to podcasts", status: "done", date: "10th Nov, 2023", priority: "low",
    },
    {
      sn: 6, description: "	Cook", status: "todo", date: "11th Nov, 2023", priority: "low",
    },
    {
      sn: 7, description: "	Visit my project", status: "in progress", date: "12th Nov, 2023", priority: "high",
    },
    {
      sn: 8, description: "	Do kARAOKE", status: "done", date: "13th Nov, 2023", priority: "medium",
    },
    {
      sn: 9, description: "	Read my books", status: "done", date: "14th Nov, 2023", priority: "low",
    },
    {
      sn: 10, description: "	Revisit my codes", status: "done", date: "15th Nov, 2023", priority: "low",
    },
    {
      sn: 11, description: "	Go to work", status: "in progress", date: "16th Nov, 2023", priority: "medium",
    },
    {
      sn: 12, description: "	Prepare 2024 Budget", status: "todo", date: "17th Nov, 2023", priority: "low",
    },
    {
      sn: 13, description: "	Listen to the news", status: "todo", date: "18th Nov, 2023", priority: "low",
    },
    {
      sn: 14, description: "	Have a family hangout", status: "in progress", date: "19th Nov, 2023", priority: "high",
    },
    {
      sn: 15, description: "	Listen to podcasts", status: "done", date: "20th Nov, 2023", priority: "low",
    },
    {
      sn: 16, description: "	Read my books", status: "in progress", date: "21st Nov, 2023", priority: "high",
    },
    {
      sn: 17, description: "	Go to the barbers shop", status: "done", date: "22nd Nov, 2023", priority: "low",
    },
    {
      sn: 18, description: "	Visit my stylists", status: "todo", date: "23rd Nov, 2023", priority: "medium",
    },
    {
      sn: 19, description: "	Read my books", status: "todo", date: "24th Nov, 2023", priority: "high",
    },
    {
      sn: 20, description: "	Ensure all things are okay", status: "done", date: "25th Nov, 2023", priority: "high",
    },
    {
      sn: 21, description: "	Hang out with friends", status: "in progress", date: "26th Nov, 2023", priority: "low",
    },
    {
      sn: 22, description: "	Reconcile my books", status: "todo", date: "27th Nov, 2023", priority: "low",
    },
    {
      sn: 23, description: "	Close for the year", status: "in progress", date: "28th Nov, 2023", priority: "high",
    },
    {
      sn: 24, description: "	Visit the motherless", status: "todo", date: "29th Nov, 2023", priority: "medium",
    },
    {
      sn: 25, description: "	Sleep and rest", status: "todo", date: "30th Nov, 2023", priority: "low",
    },
    {
      sn: 26, description: "	Go to church and dance", status: "in progress", date: "1st Dec, 2023", priority: "high",
    },
    {
      sn: 27, description: "	Visit my family", status: "todo", date: "2nd Dec, 2023", priority: "high",
    },
    {
      sn: 28, description: "	Relearn my codes", status: "in progress", date: "3rd Dec, 2023", priority: "medium",
    },
    {
      sn: 29, description: "	Listen to podcasts", status: "done", date: "4th Dec, 2023", priority: "low",
    },
    {
      sn: 30, description: "	Cook", status: "todo", date: "5th Dec, 2023", priority: "low",
    },
    {
      sn: 31, description: "	Visit my project", status: "in progress", date: "6th Dec, 2023", priority: "high",
    },
    {
      sn: 32, description: "	Do kARAOKE", status: "done", date: "7th Dec, 2023", priority: "medium",
    },
    {
      sn: 33, description: "	Read my books", status: "done", date: "8th Dec, 2023", priority: "low",
    },
    {
      sn: 34, description: "	Revisit my codes", status: "done", date: "9th Dec, 2023", priority: "low",
    },
    {
      sn: 35, description: "	Go to work", status: "in progress", date: "10th Dec, 2023", priority: "medium",
    },
    {
      sn: 36, description: "	Prepare 2024 Budget", status: "todo", date: "11th Dec, 2023", priority: "low",
    },
    {
      sn: 37, description: "	Listen to the news", status: "todo", date: "12th Dec, 2023", priority: "low",
    },
    {
      sn: 38, description: "	Have a family hangout", status: "in progress", date: "13th Dec, 2023", priority: "high",
    },
    {
      sn: 39, description: "	Listen to podcasts", status: "done", date: "14th Dec, 2023", priority: "low",
    },
    {
      sn: 40, description: "	Read my books", status: "in progress", date: "15th Dec, 2023", priority: "high",
    },
    {
      sn: 41, description: "	Go to the barbers shop", status: "done", date: "16th Dec, 2023", priority: "low",
    },
    {
      sn: 42, description: "	Visit my stylists", status: "todo", date: "17th Dec, 2023", priority: "medium",
    },
    {
      sn: 43, description: "	Read my books", status: "todo", date: "18th Dec, 2023", priority: "high",
    },
    {
      sn: 44, description: "	Ensure all things are okay", status: "done", date: "19th Dec, 2023", priority: "high",
    },
    {
      sn: 45, description: "	Hang out with friends", status: "in progress", date: "20th Dec, 2023", priority: "low",
    },
    {
      sn: 46, description: "	Reconcile my books", status: "todo", date: "21st Dec, 2023", priority: "low",
    },
    {
      sn: 47, description: "	Close for the year", status: "in progress", date: "22nd Dec, 2023", priority: "high",
    },
    {
      sn:48 , description: "	Visit the motherless", status: "todo", date: "23rd Dec, 2023", priority: "medium",
    },
    {
      sn: 49, description: "	Sleep and rest", status: "todo", date: "24th Dec, 2023", priority: "low",
    },
    {
      sn: 50, description: "	Go to church and dance", status: "in progress", date: "25th Dec, 2023", priority: "high",
    },

    
    
  ],
};


// adding focus event to the search input to display the cancel button
textInput.addEventListener("focus", () => {
  cancel.style.display = "block";
});

// adding blur event to the search input to display the cancel button
textInput.addEventListener("blur", () => {
  cancel.style.display = "none";
});

// empty the search input when cancel btn is clicked
cancel.addEventListener("mousedown", (e) => {
  e.preventDefault();
  textInput.value = "";
createTable(taskDetails.taskList);

});

// modal

const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const openModalBtn = document.getElementById('addTaskBtn');
const addTask = document.getElementById('editButton');
const closeModalBtn = document.getElementById('closeButton');
const filterModal=document.querySelector(".filter-modal");
const filterModalContent = document.querySelector('.filter-modal-content');
const openFilterButton = document.querySelector('.filter-button');
const closeFilterButton=document.querySelector('#closeFilterButton');

const closeModal = () => {
  if (!modal.classList.contains('close')) {
    modal.classList.add('close');
  }
};

const openModal = function() {
  modal.classList.remove("close");
  modalContent.classList.remove("close");

};
openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener('click', () => {
  closeModal();
});

openModalBtn.addEventListener('click', () => {
  openModal();
});

// Event listener for the "Add Task" button within the modal
addTask.addEventListener('click', () => {
  const descriptionInput = document.querySelector('#descriptionBox');
  const statusInput = document.querySelector('.btn.active-Btn'); 
  const dateInput = document.querySelector('#dateBox'); 
  const priorityInput = document.querySelector('.btn.active-Btn'); 

  const description = descriptionInput.value;
  const status = statusInput.textContent;
  const date = dateInput.value; 
  const priority = priorityInput.textContent;

  if (description.trim() !== '' && status.trim() !== '' && date.trim() !== '' && priority.trim() !== '') {
    // If all fields are filled, add the task to the task list
    addTaskToList(description, status, date, priority);
    closeModal(); 
    createTable(taskDetails.taskList); 
  } else {
  // .selectDescription.style.display="visible"
  }
});
// Function to add a task to the task list
function addTaskToList(description, status, date, priority) {
  const newTask = {
    sn: taskDetails.taskList.length + 1,
    description: description,
    status: status,
    date: date,
    priority: priority
  };

  // Push the new task to the task list
  taskDetails.taskList.push(newTask);
}
// 


// closeModalBtn.addEventListener("click", (e) =>{
// e.preventDefault()
//     modal.style.display="none";
//   });

// window.addEventListener("click", (e) =>{
//   if (e.target == modal){
//     modal.style.display="none";
//   }
//   });
  const closeFilterModal = () => {
    if (!filterModal.classList.contains('close')) {
      filterModal.classList.add('close');
    }
  };
  
  const openFilterModal = function() {
    filterModal.classList.remove("close");
    filterModalContent.classList.remove("close");
  };
  openFilterButton.addEventListener("click", openFilterModal);
  
  closeFilterButton.addEventListener('click', () => {
    closeFilterModal();
  });
  
  openFilterButton.addEventListener('click', () => {
    openFilterModal();
    
  });
 
  // window.addEventListener("click", (e) =>{
  //   if (e.target == filterModal){
  //     filterModal.style.display="none";
  //   }
  //   });

  // Function to filter tasks by status
function filterTasksByStatus(status) {
  const filteredTasks = taskDetails.taskList.filter(task => task.status.toLowerCase() === status.toLowerCase());
  return filteredTasks;
}

// // Update the event listeners for status buttons to filter the tasks
const statusButtons = document.querySelectorAll('.filter-buttons .btn');

statusButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    statusButtons.forEach((b) => {
      b.classList.remove('active-Btn');
    });
    e.target.classList.add('active-Btn');
    let text = e.target.textContent.toLowerCase();
    
    let filteredTasksToShow = taskDetails.taskList;
    
    if (text !== 'all') {
      filteredTasksToShow = filterTasksByStatus(text);
    }
    
    createTable(filteredTasksToShow);
  });
});




// create table dynamically 

function createTable(data,currentPage=1, itemsPerPage=10) {
    const myTable = document.getElementById("myTable");
    myTable.innerHTML = '';
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const tasksToDisplay = data.slice(startIndex, endIndex);
  
    tasksToDisplay.forEach((el) => {
    const tr = document.createElement("tr")
    tr.className= 'description'
    tr.innerHTML = `
    <td><input type="checkbox" name="" id="checkbox"></td>
    <td>${el.sn}</td>
    <td class='des'>${el.description}</td>
    <td><button class="btn ${el.status}">${el.status}</button></td>
    <td>${el.date}</td>
    <td><button class="btn ${el.priority}">${el.priority}</button></td>
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
 
    `;
  myTable.append(tr)
  })
    
  
    updatePagination(data.length, currentPage, itemsPerPage);
  }
  function updatePagination(totalItems, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    document.getElementById("currentPage").textContent = currentPage;
    document.getElementById("totalPage").textContent = totalPages;
    document.getElementById("totalItems").textContent = `Of ${totalItems}`;
  
    const selectPageDropDown = document.getElementById("selectPageDropDown");
    selectPageDropDown.innerHTML = '';
  
    for (let i = 1; i <= totalPages; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      selectPageDropDown.appendChild(option);
    }
  
    // Add event listener for changing pages via dropdown
    selectPageDropDown.addEventListener('change', (e) => {
      const selectedPage = parseInt(e.target.value);
      createTable(taskDetails.taskList, selectedPage, itemsPerPage);
    });
  
    const prevButton = document.getElementById("prev");
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        createTable(taskDetails.taskList, currentPage - 1, itemsPerPage);
      }
    });
  
    const nextButton = document.getElementById("next");
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        createTable(taskDetails.taskList, currentPage + 1, itemsPerPage);
      }
    });
  }
  
  // Initial table creation
  createTable(taskDetails.taskList);

// filter functionality

textInput.addEventListener("input", () => {
  const value = textInput.value;
  const dataCopy= [...taskDetails.taskList]
  const data = dataCopy.filter(el=> el.description.toLowerCase().includes(value.toLowerCase()) )
  if (data.length <= 0) {
    todoTable.style.visibility="hidden"
    inputedErrorText.textContent=`"${value}"`
    errorMessage.style.display="block"

  }else{
    todoTable.style.visibility="visible"
    inputedErrorText.textContent=''
    errorMessage.style.display="none"
  }
  createTable(data);
});



