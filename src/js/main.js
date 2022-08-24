const openBtn = document.querySelector(".content_pop_up_btn");
const closeBtn = document.querySelector(".close_pop_up_btn");
const modal = document.getElementById("modal");
const resetBtn = document.querySelector(".reset_btn");
const counter = document.querySelector(".span_counter");
let counts = 0;

// Counts checker - START

function checkCounts(counts) {
  if (counts > 5) {
    resetBtn.parentElement.style.display = "flex";
  }
}

// Counts checker - END

// Reset button logic - START

function resetCounter() {
  counts = 0;
  closePopUp();
  setTimeout(() => {
    resetBtn.parentElement.style.display = "none";
  }, 300);
}

// Reset button logic - END

// Popup logic - START

function openPopUp() {
  counts++;
  modal.classList.add("fade");
  setTimeout(() => {
    modal.classList.remove("hidden");
    modal.classList.remove("fade");
  }, 250);
  counter.textContent = counts;
  checkCounts(counts);
}
console.log(counts);

function closePopUp() {
  modal.classList.add("fade_out");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("fade_out");
  }, 450);
}

// Popup accessibility logic - escape key for closing

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" || (e.keyCode === 27 && !modal.classList.contains("hidden"))) {
    closePopUp();
  }
});

document.addEventListener("click", (e) => {
  if (e.target === modal && !modal.classList.contains("hidden")) {
    closePopUp();
  }
});

// Popup logic - END

resetBtn.addEventListener("click", resetCounter);
openBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
