const toggleFan = document.getElementById("toggle-fan");
const fan = document.querySelector(".fan");
const speedSlider = document.getElementById("speed-slider");
const speedValue = document.getElementById("speed-value");
let isFanRunning = false;

toggleFan.addEventListener("click", () => {
    if (!isFanRunning) {
        fan.style.animationPlayState = "running";
        toggleFan.textContent = "Stop Fan";
    } else {
        fan.style.animationPlayState = "paused";
        toggleFan.textContent = "Start Fan";
    }
    isFanRunning = !isFanRunning;
});

speedSlider.addEventListener("input", () => {
    const speed = 100 - speedSlider.value; 
    fan.style.animationDuration = `${speed / 100}s`;
    speedValue.textContent = speed; 

    const hue = 360 - speedSlider.value * 3.6; 
    const color = `hsl(${hue}, 100%, 50%)`;
    fan.querySelectorAll('.blade').forEach(blade => {
        blade.style.background = color;
    });
});

speedSlider.dispatchEvent(new Event("input")); 
