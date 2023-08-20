function showTime(){
     // Get the current date and time
    let date = new Date();

    // Extract hours, minutes, and seconds from the current date
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59

    
  // Initialize the session (AM/PM)
    let session = "AM";
    
    
  // Adjust the hours and session based on the 12-hour clock format
    if(h === 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
// Add leading zeros if necessary to ensure double-digit format
    if (h < 10) {
        h = "0" + h;
      }
      
      if (m < 10) {
        m = "0" + m;
      }
      
      if (s < 10) {
        s = "0" + s;
      }
    
// Construct the time string in the format "hh:mm:ss AM/PM"
    const time = h + ":" + m + ":" + s + " " + session;

// Update the content of the element with id "MyClockDisplay"
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
// Schedule the showTime function to run again after 1000 milliseconds (1 second)
    setTimeout(showTime, 1000);
    
}
// Call the showTime function to start displaying the time
showTime();