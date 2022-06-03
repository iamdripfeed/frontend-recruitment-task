// model

// view

class imageView {
  showModalButton = document.querySelector(".main__button");
  modal = document.querySelector(".modal");
  overlay = document.querySelector(".overlay");
  modalInfo = document.querySelector(".modal__info");
  counter;
  constructor(counter) {
    this.counter = counter;
    this.showModal();
    this.hideModal();
    this.cacheCounter();
  }

  showModal() {
    this.showModalButton.addEventListener("click", () => {
      this.counter++;
      this.cacheCounter();
      this.toggleModal();
      this.modalInfo.textContent = `You have clicked ${this.counter} times to related button`;
    });
  }

  hideModal() {
    this.overlay.addEventListener("click", () => {
      this.toggleModal();
    });
  }

  toggleModal() {
    this.overlay.classList.toggle("hidden");
    this.modal.classList.toggle("hidden");
  }

  cacheCounter() {
    localStorage.setItem("counter", this.counter);
  }
}

new imageView(localStorage.getItem("counter") || 0);
