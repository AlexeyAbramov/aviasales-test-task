let store = {
    state: {
        contentPage: {
            airCard: {
                prices: [
                    {price: 1030},
                    {price: 500},
                    {price: 15500},
                    {price: 1300},
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


    }
};

export let filterrino = () =>{
    let aby = store.state.contentPage.airCard.prices.filter(function (number) {
        return number.price > 10000;
    });
    store.state.contentPage.airCard.prices = aby;
    reRender(store);
};
// export let filterAll = filter(1000);


export let sortPrices = () => {
    store.state.contentPage.airCard.prices.sort(function (a, b) {
        return a.price - b.price;
    });
    reRender(store);
};


let reRender = () => {
};
export let subscribe = (observer) => {
    reRender = observer;
};
export default store;