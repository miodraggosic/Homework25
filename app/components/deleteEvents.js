const delEvents = function (elem) {
  const delBtns = document.querySelectorAll(`#${elem.id} button`);

  delBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      this.deleteItem(id);
    });
  });
};

export default delEvents;
