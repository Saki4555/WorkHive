import { getShoppingCart } from "../Utilites/fakeDb"

const loadFromLocalStorage = async() =>{
    const res = await fetch('featured.json');
    const data = res.json();


    const storedItem = getShoppingCart();

    const savedItem = [];

    for(const id in storedItem){
        const added = data.find(it => it.id == id)

        if(added){
            savedItem.push(added);
        }
    }

    return savedItem;

}

export default loadFromLocalStorage;