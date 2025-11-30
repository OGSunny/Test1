// Function called by Pawn to update the health
function updateHealth(healthValue) {
    // healthValue will be a number from 0.0 to 100.0
    const fill = document.getElementById('health-bar-fill');
    const text = document.getElementById('health-text');
    
    // Update the visual bar width
    fill.style.width = healthValue + '%';
    
    // Update the text
    text.innerText = Math.round(healthValue) + '%';
    
    // Change color based on health level (Optional, but nice)
    if (healthValue < 25) {
        fill.style.backgroundColor = '#F44336'; // Red
        text.style.color = '#F44336';
    } else if (healthValue < 50) {
        fill.style.backgroundColor = '#FF9800'; // Orange
        text.style.color = '#FF9800';
    } else {
        fill.style.backgroundColor = '#4CAF50'; // Green
        text.style.color = '#4CAF50';
    }
}

// Function called by Pawn to update the money
function updateMoney(amount) {
    const text = document.getElementById('money-text');
    // Format the number nicely (e.g., 100000 -> 100,000)
    const formattedAmount = amount.toLocaleString('en-US');
    text.innerText = '$' + formattedAmount;
}
