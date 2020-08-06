import { all } from "redux-saga/effects";

import { watchFetchProducts } from "./products/fetchProducts";

function* rootSaga() {
  yield all([watchFetchProducts()]);
}

export default rootSaga;
