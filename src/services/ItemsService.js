import {API_BASE} from "../constants/API";

class ItemsServiceClass {
  getAll () {
    return fetch(`${API_BASE}/items`)
        .then(res => {
          return res.json();
        })
        .catch(err => console.log(err));
  }

  getOne (id) {
    return fetch(`${API_BASE}/items/${id}`)
        .then(res => {
          return res.json();
        })
        .catch(err => console.log(err));
  }
}

const ItemsService = new ItemsServiceClass();
export default ItemsService;