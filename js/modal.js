(() => {
    const refs = {
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    const openModals = document.querySelectorAll("[data-modal-open]");
        openModals.forEach(openModal =>
            openModal.addEventListener("click", toggleModal))
    refs.closeModalBtn.addEventListener("click", toggleModal);    
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();