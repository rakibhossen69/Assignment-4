const allContainer = document.getElementById("card-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-status");
// console.log(emptyState);
// console.log(rejectedContainer);
//        switching place
let currentTab = "all";
function toggle(clickTab) {
 
  const tabs = ["all", "interview", "rejected"];
  currentTab = clickTab;
  // console.log(tabs);
  for (const tab of tabs) {
    const allTabs = document.getElementById("tab-" + tab);
    if (tab === clickTab) {
      allTabs.classList.remove("btn", "border-black", "rounded-2xl");
      allTabs.classList.add("btn", "btn-secondary", "rounded-2xl");
    } else {
      allTabs.classList.add("btn", "border-black", "rounded-2xl");
      allTabs.classList.remove("btn-secondary");
    }
  }
  const allSection = [allContainer, interviewContainer, rejectedContainer];
  for (const section of allSection) {
    section.classList.add("hidden");
  }
   emptyState.classList.add("hidden");
  if (clickTab == "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (clickTab == "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  
}
toggle(currentTab);
// count update
const total = document.getElementById("total");
const totalInterview = document.getElementById("total-interview");
const totalRejected = document.getElementById("total-rejected");
const availableJob = document.getElementById("available-job")

// console.log(total,totalRejected,totalInterview);
total.innerText = allContainer.children.length;
// event section
document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickElement = event.target;
    const card = event.target.parentNode.parentNode;
    const cardParent = card.parentNode;
    const cardStatus = card.querySelector("#status");
    if (clickElement.classList.contains("interview")) {
      cardStatus.innerText = "interview";
      interviewContainer.appendChild(card);
     
    } else if (clickElement.classList.contains("rejected")) {
      cardStatus.innerText = "rejected";
      rejectedContainer.appendChild(card);
      
    } else if (clickElement.classList.contains("delete")) {
      cardParent.removeChild(card);
    }
    update();
  });
function update() {
  const count = {
    all:allContainer.children.length,
    interview:interviewContainer.children.length,
    rejected:rejectedContainer.children.length,
  };
   total.innerText = count['all'];
   totalInterview.innerText = count['interview'];
   totalRejected.innerText = count['rejected']
   availableJob.innerText = count[currentTab]
   if(count[currentTab] < 1){
    emptyState.classList.remove("hidden");
   }else{
    emptyState.classList.add("hidden");
   }

}
update();
