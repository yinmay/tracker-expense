import _ from "lodash";
import { getExpenses } from "../services";

export default {
  namespace: "global",
  state: {
    totalPlusTaxes: 0,
    total: 0,
    data: [
      {
        id: 0,
        description: "pencil",
        amount: 1,
        date: 123,
      },
      {
        id: 1,
        description: "pen",
        amount: 2,
        date: 123,
      },
    ],
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

    getSum(state) {
      const total = state.data.reduce((prev, next) => prev + next.amount, 0);
      const dataFilter = state.data.map((i) => ({
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
      // yield put({ type: "getSum" });
      debugger;
      const data = yield call(getExpenses);
      console.log(data);
    },
    *addData({ payload }, { put }) {
      const item = payload.item;
      yield put({ type: "add", item });
      yield put({ type: "getSum" });
    },
    *delData({ payload }, { put }) {
      const item = payload.item;
      yield put({ type: "del", item });
      yield put({ type: "getSum" });
    },
    *editData({ payload }, { put }) {
      const item = payload.item;
      const index = payload.index;
      yield put({ type: "edit", item, index });
      yield put({ type: "getSum" });
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
