import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { success, error, abort } from "@redux-requests/core";

const todosEpic = (action$, state$) =>
  action$.pipe(
    ofType(success("FETCH_BOOKS")),
    mergeMap(({ response }) => {
      const data = state$.value.requests.queries.FETCH_BOOKS;
      // console.log("data EPIC ", response);
      // console.log("state from EPIC", data);
      // window.alert("done");
      return EMPTY;
    })
  );

const todosResetEpic = (action$) =>
  action$.pipe(
    ofType("RESET_REQUESTS"),
    mergeMap(() => {
      // window.alert("store empty");
      return EMPTY;
    })
  );

export const epics = [todosEpic, todosResetEpic];
