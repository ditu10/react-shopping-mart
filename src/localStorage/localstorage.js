const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] += 1;
    }
    else {
        db[item] = 1;
    }
    saveToLocalStorage(db);
}

const removeToDb = item => {
    const db = getDb();
    if (item in db) {
        delete db[item];
    }
    
    saveToLocalStorage(db);
}

const deleteDB = () => {
    localStorage.removeItem('shopping-cart');
}

const saveToLocalStorage = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON);
}



const getDb = () => {
    let db = localStorage.getItem('shopping-cart');
    if (db) {
        db = JSON.parse(db);
    }
    else {
        db = {};
    }
    return db;
}

export {addToDb, getDb, removeToDb , deleteDB};