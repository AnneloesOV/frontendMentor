const API = "https://api.adviceslip.com/advice";

// Function to display the advice
async function displayAdvice() {
    const advice = await getAdvice();
    console.log(`advice obtained: ${advice.advice}`);
    const display = document.getElementById('advice');
    display.textContent = `"${advice.advice}"`;
    const displayHeader = document.getElementById('advice-header');
    displayHeader.textContent = `ADVICE #${advice.id}`;
}

// Function to get advice from the API using async/await
async function getAdvice() {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error('Request failed!');
        }
        const jsonResponse = await response.json();
        return jsonResponse.slip; 
    } catch (error) {
        console.error('Error fetching advice:', error);
        return { id: null, advice: 'Failed to fetch advice' };
    }
}

displayAdvice();
const button = document.getElementById('icon-box');
button.addEventListener('click', displayAdvice);