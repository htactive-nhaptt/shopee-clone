import { takeLatest, put, call } from "redux-saga/effects";
import PRODUCTS from "../../actions/actionTypes";
import { fetchProductsSucess } from "../../actions/productActions";
import { fetchProductsFromApi } from "../../api/ProductApi";

function* fetchProducts() {
  const productsFromApi = yield call(fetchProductsFromApi);
  yield put(fetchProductsSucess(productsFromApi));
}

export function* watchFetchProducts() {
  yield takeLatest(PRODUCTS.FETCH_PRODUCTS, fetchProducts);
}
