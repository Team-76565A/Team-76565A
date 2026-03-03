// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const content = document.getElementById("content");

// State
let devices = [
  { name: "Living Room Light", on: false },
  { name: "Thermostat", on: false },
  { name: "Front Door Lock", on: false },
];
let groups = [
  { name: "All Lights", on: false },
  { name: "Security Devices", on: false },
];

// Theme
function setTheme(theme){
  document.body.className="theme-"+theme;
}

// Render Functions
function renderHome() {
  return `
    <div class="card">
      <h2>System Status</h2>
      <p>All systems online ✅</p>
    </div>
    <div class="card">
      <h2>Quick Controls</h2>
      <ul>
        <li>Lights <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Climate <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
      </ul>
    </div>
  `;
}

function renderDevices() {
  let list = devices.map((d,i)=>`
    <li>${d.name} 
      <label class="switch">
        <input type="checkbox" ${d.on?"checked":""} data-index="${i}">
        <span class="slider"></span>
      </label>
    </li>
  `).join("");
  return `
    <div class="card">
      <h2>Devices</h2>
      <ul>${list}</ul>
      <button class="add-btn" onclick="addDevice()">Add Device</button>
    </div>
  `;
}

function renderGroups() {
  let list = groups.map((g,i)=>`
    <li>${g.name} 
      <label class="switch">
        <input type="checkbox" ${g.on?"checked":""} data-index="${i}">
        <span class="slider"></span>
      </label>
    </li>
  `).join("");
  return `
    <div class="card">
      <h2>Groups</h2>
      <ul>${list}</ul>
      <button class="add-btn" onclick="addGroup()">Add Group</button>
    </div>
  `;
}

function renderAutomation() {
  return `
    <div class="card">
      <h2>Automation</h2>
      <p>Placeholder for schedules, triggers, and scenes.</p>
    </div>
  `;
}

function renderSettings() {
  return `
    <div class="card">
      <h2>Theme Settings</h2>
      <div class="theme-selector">
        <button onclick="setTheme('light')">Light</button>
        <button onclick="setTheme('dark')">Dark</button>
      </div>
    </div>
    <div class="card">
      <h2>Diagnostics</h2>
      <p>Hub online ✅ | Devices online: ${devices.length} | Last sync: 5s ago</p>
    </div>
  `;
}

// Render Tab
function renderTab(tab){
  switch(tab){
    case "home": content.innerHTML=renderHome(); break;
    case "devices": content.innerHTML=renderDevices(); attachDeviceListeners(); break;
    case "groups": content.innerHTML=renderGroups(); attachGroupListeners(); break;
    case "automation": content.innerHTML=renderAutomation(); break;
    case "settings": content.innerHTML=renderSettings(); break;
  }
}

// Tab switching
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    renderTab(tab.dataset.tab);
  });
});

// Dynamic Add Device/Group
function addDevice(){
  let name = prompt("Device Name:");
  if(name){ devices.push({name,on:false}); renderTab("devices"); attachDeviceListeners(); }
}
function addGroup(){
  let name = prompt("Group Name:");
  if(name){ groups.push({name,on:false}); renderTab("groups"); attachGroupListeners(); }
}

// Toggle switches
function attachDeviceListeners(){
  document.querySelectorAll("#content input[type='checkbox']").forEach(input=>{
    input.addEventListener("change", e=>{
      let idx = e.target.dataset.index;
      devices[idx].on = e.target.checked;
    });
  });
}
function attachGroupListeners(){
  document.querySelectorAll("#content input[type='checkbox']").forEach(input=>{
    input.addEventListener("change", e=>{
      let idx = e.target.dataset.index;
      groups[idx].on = e.target.checked;
    });
  });
}

// Initial Load
renderTab("home");
