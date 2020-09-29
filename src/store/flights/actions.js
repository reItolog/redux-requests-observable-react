const FETCH_BOOKS = "FETCH_BOOKS";
const FETCH_BOOK = "FETCH_BOOK";

export const fetchBooks = () => (dispatch) => {
  return dispatch({
    type: FETCH_BOOKS,
    request: {
      url: `/todos`,
    },
    meta: {
      getData: (data) => {
        return data.slice(0, 20);
      },
    },
  });
};

export const fetchBook = (id) => (dispatch) => {
  return dispatch({
    type: FETCH_BOOK,
    request: {
      url: `/todos/${id}`,
    },
  });
};
