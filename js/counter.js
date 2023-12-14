// Check if there is a stored count in localStorage
let visitorCount = localStorage.getItem('visitorCount') || 0;

// Display the initial count
document.getElementById('visitorCount').textContent = visitorCount;

// Increment the count on each visit
visitorCount++;
document.getElementById('visitorCount').textContent = visitorCount;

// Store the updated count in localStorage
localStorage.setItem('visitorCount', visitorCount.toString());
