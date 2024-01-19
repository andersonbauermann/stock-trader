import stocks from "../../data/stocks";

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }) {
            commit()
        }
    },
    initStocks({ commit }) {
        commit('setStocks', stocks)
    },
    getter: {
        stocks(state) {
            return state.stocks
        }
    }
}