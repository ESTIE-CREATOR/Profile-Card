function getCurrentUTC() {
    const now = new Date();
    const utcTime = now.toUTCString(); // Convert to UTC time
    document.getElementById("utcTime").textContent = utcTime; // Display UTC time
}
getCurrentUTC(); 