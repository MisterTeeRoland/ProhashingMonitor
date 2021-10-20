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