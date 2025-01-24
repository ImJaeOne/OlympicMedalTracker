export const setStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error('Failed setStorage : ', err);
    }
};

export const getStorage = (key) => {
    try {
        console.log('getStorage 실행!');
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (err) {
        console.error('Failed getStorage : ', err);
        return null;
    }
};