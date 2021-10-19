import AsyncStorage from '@react-native-async-storage/async-storage';

// export const load_api_key = async () => {
//     try {
//         const value = await AsyncStorage.getItem('@api_key')
//         if (value === null) {
//             console.log("no key loaded")
//         }
//         return value
//     } catch (e) {
//         // error reading value  
//         console.log("error reading value")
//         console.log(e)
//     }
// }

// export const save_api_key = async (value) => {
//     try {
//         console.log('saving api_key = ' + value)
//         await AsyncStorage.setItem('@api_key', value)
//         Alert.alert(
//             "Success",
//             "API Key has been saved.",
//             [{ text: "OK" }]
//         );
//     } catch (e) {
//         // saving error  
//     }
// }


// export const remove_api_key = async () => {
//     try {
//         setRealApiKey('')
//         setApiKey('')
//         await AsyncStorage.removeItem('@api_key')
//         Alert.alert(
//             "Success",
//             "API Key has been cleared.",
//             [{ text: "OK" }]
//         );
//     } catch (e) {
//         // remove error
//     }
// }

// export const load_currency = async() => {
//     try {
//         const value = await AsyncStorage.getItem('@currency')
//         if (value === null) {
//             console.log("no currency loaded")
//         }
//         return value
//     } catch (e) {
//         // error reading value  
//         console.log("error reading value")
//         console.log(e)
//     }
// }

// export const set_currency = async() => {
//     try {
//         console.log('saving api_key = ' + value)
//         await AsyncStorage.setItem('@currency', value)
//         Alert.alert(
//             "Success",
//             "Currency has been saved.",
//             [{ text: "OK" }]
//         );
//     } catch (e) {
//         // saving error  
//     }
// }

export const set_keys = async(obj) => {
    try {
        console.log('saving');
        console.log(obj);
        await AsyncStorage.setItem('@api_key', obj.api_key);
        await AsyncStorage.setItem('@currency', obj.currency);
        await AsyncStorage.setItem('@threshold', obj.threshold);
        // Alert.alert("Success", "Settings have been saved");
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
        // console.log('loading api_key: '+api_key)
        // console.log('loading currency: '+currency)
        // console.log('loading threshold: '+threshold)
        return {
            api_key: api_key != null ? api_key : '', 
            currency: currency != null ? currency : 'usd', 
            threshold: threshold != null ? threshold : 0.00
        };
    } catch (e) {
        console.log('error loading keys');
        console.log(e);
        return {api_key: '', currency: 'usd', threshold: 0.00};
    }
}