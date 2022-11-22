const renderObj = function (arr, elem) {
  elem.innerHTML = "";

  const createElem = (el) => document.createElement(el);

  const createRow = (object) => {
    const tr = createElem("tr");

    const objValues = Object.values(object);
    const objId = objValues.pop();
    objValues.unshift(objId);

    objValues.forEach((value) => {
      const td = createElem("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    return tr;
  };

  const createDelBtn = (id) => {
    const delTd = createElem("td");
    const delBtn = createElem("button");

    delBtn.setAttribute("data-id", id);
    delBtn.textContent = "Delete";
    delBtn.classList.add(`btn-block`);
    delBtn.classList.add(`btn-warning`);

    delTd.appendChild(delBtn);
    return delTd;
  };

  for (const obj of arr) {
    const tr = createRow(obj);
    const delBtn = createDelBtn(obj.id);

    tr.appendChild(delBtn);
    elem.appendChild(tr);
  }
};

export default renderObj;
