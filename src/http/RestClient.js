export default class {
  _url = null;
  endpoint = "http://localhost:3000";

  to(path) {
    this._url = `${this.endpoint}/${path}`;
    return this;
  }

  createHeaders() {
    return {
      "Content-Type": "application/json"
    };
  }

  asyncPost(payload) {
    return new Promise((resolve, reject) => {
      fetch(this._url, {
        method: "POST",
        headers: this.createHeaders(),
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(reject);
    });
  }

  asyncGet() {
    return new Promise((resolve, reject) => {
      fetch(this._url, {
        method: "GET",
        headers: this.createHeaders()
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(reject);
    });
  }

  asyncPut(payload) {
    return new Promise((resolve, reject) => {
      fetch(this._url, {
        method: "PUT",
        headers: this.createHeaders(),
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(reject);
    });
  }

  asyncDelete(payload) {
    return new Promise((resolve, reject) => {
      fetch(this._url, {
        method: "DELETE",
        headers: this.createHeaders(),
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(reject);
    });
  }
}
