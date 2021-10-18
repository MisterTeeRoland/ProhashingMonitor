import AsyncStorage from '@react-native-async-storage/async-storage';

export const load_api_key = async () => {
    try {
        const value = await AsyncStorage.getItem('@api_key')
        if (value === null) {
            console.log("no key loaded")
        }
        return value
    } catch (e) {
        // error reading value  
        console.log("error reading value")
        console.log(e)
    }
}