import _ from "lodash";
import {
  getExpenses,
  addExpense,
  delExpense,
  updateExpense,
} from "../services";

export default {
  namespace: "global",
  state: {
    totalPlusTaxes: 0,
    total: 0,
    data: [],
  },
  reducers: {
    add(state, action) {
      return {
        ...state,
        data: [...state.data, action.item],
      };
    },
    del(state, action) {
      return {
        ...state,
        data: _.pull(state.data, action.item),
      };
    },

    edit(state, action) {
      const { index, item } = action;
      const data = [
        ...state.data.slice(0, index),
        item,
        ...state.data.slice(index + 1),
      ];
      return {
        ...state,
        data,
      };
    },

    getSum(state, action) {
      let data;
      if (_.get(action.data, "length") === 0) {
        data = state.data;
      } else {
        data = action.data;
      }
      const total = data.reduce((prev, next) => prev + next.amount, 0);
      const dataFilter = data.map((i) => ({
        ...i,
        taxes: _.get(i, "amount") * 0.15,
      }));
      const totalTaxes = dataFilter.reduce(
        (prev, next) => prev + next.taxes,
        0
      );
      const totalPlusTaxes = total + totalTaxes;
      return {
        ...state,
        total,
        totalPlusTaxes,
        data: dataFilter,
      };
    },
  },
  effects: {
    *getInitial(action, { put, call }) {
      const { data } = yield call(getExpenses);
      yield put({ type: "getSum", data });
    },
    *addData({ payload }, { put, call }) {
      const item = payload.item;
      yield call(addExpense.bind(this, item));
      const { data } = yield call(getExpenses);
      yield put({ type: "getSum", data });
    },
    *delData({ payload }, { put, call }) {
      const item = payload.item;
      yield call(delExpense.bind(this, item));
      const { data } = yield call(getExpenses);
      yield put({ type: "getSum", data });
    },
    *editData({ payload }, { put, call }) {
      const item = payload.item;
      yield call(updateExpense.bind(this, item));
      const { data } = yield call(getExpenses);
      debugger;
      yield put({ type: "getSum", data });
    },
    // *getRecord({ payload }, { put }) {
    //   const item = payload.item;
    //   yield put({ type: "record", item });
    // },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname }) => {
    //     if (pathname === '/user') {
    //       dispatch({ type: 'fetch' });
    //     }
    //   });
    // },
  },
};
