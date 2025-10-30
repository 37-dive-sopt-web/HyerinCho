const openModalAction = (modal) => {
  modal.classList.remove("hidden");
  modal.style.display = "flex";
};

const closeModalAction = (modal) => {
  modal.classList.add("hidden");
  modal.style.display = "none";
};

const handleOpenModal = (modal, openModalBtn) => {
  openModalBtn.addEventListener("click", () => openModalAction(modal));
}

const handleCloseModal = (modal, closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => closeModalAction(modal));
};

export { handleOpenModal, handleCloseModal, closeModalAction };