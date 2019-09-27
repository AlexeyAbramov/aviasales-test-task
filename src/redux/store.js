let store = {
    state: {
        contentPage: {
            price : ["13400 Р"],
            cities : ["Mow", " Hkt"],
            transfer: [2],
            time: ["10:45", "08:00"],
            way: ["21", "15"],
            transferCities:["Hkg","Jnb"]
        },
        get getPrice() {
            return [{price: this.contentPage.price}]
        },
        get getWay() {
            return [
                {
                    cities: this.contentPage.cities,
                    transfer: this.contentPage.transfer,
                    time: this.contentPage.time,
                    way: this.contentPage.way,
                    transferCities: this.contentPage.transferCities
                }
            ]
        }

    },
};
let reRender = () => {
};
export let subscribe = (observer) => {
    reRender = observer;
};
export default store;