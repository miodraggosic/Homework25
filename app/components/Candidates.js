import renderObj from "./renderFunc.js";
import deleteEvents from "./deleteEvents.js";

class Candidates {
  constructor(api) {
    this.Api = api;
  }

  renderCandidates() {
    fetch(this.Api, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const elem = document.getElementById("tableCandidates");
        renderObj(data, elem);
        deleteEvents.call(this, elem);
      });
  }

  addCandidate(obj) {
    fetch(this.Api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => this.renderCandidates());
  }

  deleteItem(id) {
    fetch(this.Api + id, {
      method: "DELETE",
    }).then(() => this.renderCandidates());
  }
}

class Candidate {
  constructor(name, lastName) {
    (this.name = name), (this.lastName = lastName);
  }
}

export { Candidates, Candidate };
