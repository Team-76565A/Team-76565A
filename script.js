// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const content = document.getElementById("content");

// Theme switcher
function setTheme(theme) {
  document.body.className = "theme-" + theme;
}

// Tab templates
const templates = {
  home: `
    <div class="card">
      <h2>System Status</h2>
      <p>All systems online ✅</p>
    </div>
    <div class="card">
      <h2>Quick Controls</h2>
      <ul>
        <li>Lights <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Climate <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Security Mode <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
      </ul>
    </div>
  `,
  devices: `
    <div class="card">
      <h2>Devices</h2>
      <ul>
        <li>Living Room Light <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Thermostat <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Front Door Lock <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Garage Door <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
      </ul>
    </div>
  `,
  groups: `
    <div class="card">
      <h2>Groups</h2>
      <ul>
        <li>All Lights <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Security Devices <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
        <li>Climate Devices <label class="switch"><input type="checkbox"><span class="slider"></span></label></li>
      </ul>
    </div>
  `,
  automation: `
    <div class="card">
      <h2>Automation</h2>
      <p>Placeholder for creating schedules, triggers, and scenes.</p>
    </div>
  `,
  settings: `
    <div class="card">
      <h2>Theme Settings</h2>
      <div class="theme-selector">
        <button onclick="setTheme('light')">Light</button>
        <button onclick="setTheme('dark')">Dark</button>
      </div>
    </div>
    <div class="card">
      <h2>Diagnostics</h2>
      <p>Hub online ✅ | Devices online: 5 | Last sync: 10s ago</p>
    </div>
  `
};

// Initial tab load
content.innerHTML = templates.home;

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    content.innerHTML = templates[tab.dataset.tab];
  });
});
