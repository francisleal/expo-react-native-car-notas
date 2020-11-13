import AsyncStorage from '@react-native-community/async-storage';

export async function getStorage(key) { 
    try {
        const value = await AsyncStorage.getItem(key);

        if (value === null) {
            return "[]";
        }

        if (value !== null) {
            return value;
        }

    } catch (error) {
        alert(error);
    }
};

export async function setStorage(key, data) {
    try {

        let myArray = [];

        const itemArray = await AsyncStorage.getItem(key);

        if (itemArray !== null) {

            myArray = JSON.parse(itemArray);

            myArray.push(data);
            await AsyncStorage.setItem(key, JSON.stringify(myArray));
        } else {

            myArray.push(data);
            await AsyncStorage.setItem(key, JSON.stringify(myArray));
        }

    } catch (error) {
        alert(error);
    }
};

export async function updateStorage(key, data) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        alert(error);
    }
}

export async function clearStorage() {
    try {
        await AsyncStorage.clear()
        alert('Storage successfully cleared!')
    } catch (e) {
        alert('Failed to clear the async storage.')
    }
}