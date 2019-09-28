let store = {
        _state: {
            contentPage: {
                airCard: {
                    prices: [
                        {price: 1030},
                        {price: 500},
                        {price: 15500},
                        {price: 1300},
                        {price: 900},
                    ],
                    airCardInfo: [
                        {
                            cities: ["Mow", "Hkt"],
                            transfer: [5],
                            time: ["10:45", "08:00"],
                            way: ["21", "15"],
                            transferCities: ["Hkg", "Jnb"]
                        }, {
                            cities: ["Mow", "Hkt"],
                            transfer: [9],
                            time: ["10:45", "08:00"],
                            way: ["21", "15"],
                            transferCities: ["Hkg", "Jnb"]
                        },
                    ],
                },
            }
        },
        getState(){
            return this._state;
        }
    };


export let filterrino = () => {
    let currentPrices = store._state.contentPage.airCard.prices.filter(function (a) {
        return a.price > 1050;
    });
    console.log(store.getState().contentPage.airCard.prices = currentPrices)
    reRender(store);
};
export let sortPrices = () => {
    store._state.contentPage.airCard.prices.sort(function (a, b) {
        return a.price - b.price;
    });
    reRender(store);
};


export let reRender = () => {
};
export let subscribe = (observer) => {
    reRender = observer;
};
export default store;