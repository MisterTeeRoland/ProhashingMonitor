export const checkForUpdate = async () => {
    try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            // ... notify user of update ...
            Alert.alert(
                "New update available!",
                "The app will refresh to apply new changes.",
                [
                    { text: "OK", onPress: async () => await Updates.reloadAsync() }
                ]
            );
        }
    } catch (e) {
    }
}