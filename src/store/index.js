import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    price: "",
    bid: "",
    ask: "",
  },
  getters: {
    price: (state) => state.price,
    ask: (state) => state.ask,
    bid: (state) => state.bid,
  },
  mutations: {
    SET_PRICE: (state, data) => {
      state.price = data;
    },
    SET_BID: (state, data) => {
      state.bid = data;
    },
    SET_ASK: (state, data) => {
      state.ask = data;
    },
  },
  actions: {
    GET_XCHANGE({ commit }) {
      axios
        .get(
          `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=V6B5GWWDUDIVY9PZ`
        )
        .then((res) => {
          let info = res.data["Realtime Currency Exchange Rate"];
          console.log(info);
          let price = info["5. Exchange Rate"];
          let bid = info["8. Bid Price"];
          let ask = info["9. Ask Price"];
          commit("SET_PRICE", parseFloat(price).toFixed(2));
          commit("SET_BID", parseFloat(bid).toFixed(2));
          commit("SET_ASK", parseFloat(ask).toFixed(2));
        });
    },
  },
});
