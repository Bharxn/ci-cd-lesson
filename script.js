let count = 0;

const counterEl = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');

decreaseBtn.addEventListener('click', () => {
    count--;
    counterEl.textContent = count;
});

increaseBtn.addEventListener('click', () => {
    count++;
    counterEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterEl.textContent = count;
});

const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    });
});

const messageInput = document.getElementById('messageInput');
const showMessageBtn = document.getElementById('showMessage');
const displayMessage = document.getElementById('displayMessage');

showMessageBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        displayMessage.textContent = message;
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showMessageBtn.click();
    }
});
