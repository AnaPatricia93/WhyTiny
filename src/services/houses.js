import houses from './housesList.json';

const getAll = () => {
    return houses;
    // return new Promise ((resolve, reject) => {​
    //   fetch (`${houses}/book`, {method: 'GET'})​
    //     .then (res => res.json ())​
    //     .then (houses => resolve (houses))​
    //     .catch (err => reject (`error GET /house: ${err.message}`));​
    // });​
};

const getOne = id => {
    return houses.find(h => h._id == id);
    // return new Promise ((resolve, reject) => {​
    //   fetch (`${serverURL}/book/${id}`, {method: 'GET'})​
    //     .then (res => res.json ())​
    //     .then (books => resolve (books))​
    //     .catch (err => reject (`error GET /book/${id}: ${err.message}`));​
    // });​
};

const create = body => {
    houses.push(body);
};

const update = (id, body) => {
    let idx = houses.indexOf(h => h._id === id);
    houses[idx] = body;
}

const remove = id => {
    let idx = houses.indexOf(h => h._id === id);
    houses.splice(idx, 1);
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}