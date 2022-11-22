import renderObj from "./renderFunc.js";
import deleteEvents from "./deleteEvents.js";

class Categories {
  constructor(api) {
    this.Api = api;
  }

  renderCategories() {
    fetch(this.Api, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const elem = document.getElementById("tableCategory");
        renderObj(data, elem);
        deleteEvents.call(this, elem);
      });
  }

  addCategory(obj) {
    fetch(this.Api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => this.renderCategories());
  }

  deleteItem(id) {
    fetch(this.Api + `/${id}`, {
      method: "DELETE",
    }).then(() => this.renderCategories());
  }
}

class Category {
  constructor(name) {
    this.categoryName = name;
  }
}

export { Categories, Category };
