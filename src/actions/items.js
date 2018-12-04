import ItemsService from "../services/ItemsService";

export const FETCH_ALL_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEM = 'FETCH_ITEM';

export const fetchAllItems = () => dispatch => {
  return ItemsService.getAll()
      .then(items => {
        dispatch({
          type: FETCH_ALL_ITEMS,
          payload: items.data
        })
      })
};

export const fetchItem = id => (dispatch, getState) => {
  const { itemsData: { items, items_ids } } = getState();
  const itemId = items_ids.indexOf(id);
  if (~itemId) {
    return dispatch({
      type: FETCH_ITEM,
      payload: items[itemId],
      id: itemId
    })
  }
  return ItemsService.getOne(id)
      .then(item => dispatch({
        type: FETCH_ITEM,
        payload: item.data,
        id: item.id
      }))
};
