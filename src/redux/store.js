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
                        transfer: [1],
                        time: ["10:45", "08:00"],
                        way: ["21", "15"],
                        transferCities: ["Hkg", "Jnb"]
                    }, {
                        cities: ["Mow", "Hkt"],
                        transfer: [0],
                        time: ["10:45", "08:00"],
                        way: ["21", "15"],
                        transferCities: ["Hkg", "Jnb"]
                    },
                ],
            },
        }


    }
};

export let filter = () =>{
};

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