import AsyncStorage from '@react-native-async-storage/async-storage';

export const set_keys = async(obj) => {
    try {
        await AsyncStorage.setItem('@api_key', obj.api_key);
        await AsyncStorage.setItem('@currency', obj.currency);
        await AsyncStorage.setItem('@threshold', obj.threshold);
        await AsyncStorage.setItem('@theme', obj.theme);
        return true;
    } catch (e) {
        console.log('error saving keys');
        console.log(e);
        return false;
    }
}

export const load_keys = async() => {
    try {
        const api_key = await AsyncStorage.getItem('@api_key');
        const currency = await AsyncStorage.getItem('@currency');
        const threshold = await AsyncStorage.getItem('@threshold');
        const theme = await AsyncStorage.getItem('@theme');
        return {
            api_key: api_key != null ? api_key : '', 
            currency: currency != null ? currency : 'usd', 
            threshold: threshold != null ? threshold : 0.00,
            theme: theme != null ? theme : 'dark',
        };
    } catch (e) {
        console.log('error loading keys');
        console.log(e);
        return {
            api_key: '', 
            currency: 'usd', 
            threshold: 0.00,
            theme: 'dark',
        };
    }
}

export const get_balances = async(api_key) => {
    try {
        const req = await fetch(`https://prohashing.com/api/v1/wallet?apiKey=${api_key}`);
        const res = await req.json();
        if (res.code == 200) {
            return { status: 'success', data: res.data };
        } else if (res.code == 400) {
            return { status: 'error', data: res.data, err: { title: "Invalid API Key.", msg: "Please verify you have entered the correct API key in the Settings tab." } };
        } else {
            return { status: 'error', data: res.data, err: { title: "Generic Error.", msg: "Please restart the app and try again." } };
        }
    } catch (e) {
        return { status: 'error', data: e.message, err: { title: "Connection Error.", msg: "Please make sure you have an active internet connection and try again." } };
    }
}

export const get_values = async(ids, currency) => {
    try {
        const req = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${currency}`);
        const res = await req.json();
        return res;
    } catch (e) {
        return { status: 'error', data: e.message, err: { title: "Connection Error.", msg: "Please make sure you have an active internet connection and try again." } };
    }
}