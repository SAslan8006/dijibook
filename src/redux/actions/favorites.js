export const addFavoriteToFirebase = async (item, uid) => {
    try {
        const ref = database().ref('/favorites').push();
        const key = ref.key;

        await ref.set(item);
        await database().ref(`/user_favorites/${uid}`).push().set(key);

        return { data: {}, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const removeFavoriteFromFirebase = async uid => {
    console.log('UİD =>', uid);
    try {
        await database().ref(`/user_favorites/${uid}`).remove();

        return { data: {}, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const getFavoriteFromFirebase = async key => {
    try {
        const favoritesRef = database().ref('/favorites');
        const item = (await favoritesRef.child(key).once('value')).val();
        return { data: item, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const getAllFavoritesFromFirebase = async uid => {
    try {
        let keys = (
            await database().ref(`/user_favorites/${uid}`).once('value')
        ).val();
        if (keys !== null) {
            keys = Object.values(keys);
        } else {
        }

        const favorites = [];

        for (let i = 0; i < keys?.length; i++) {
            favorites.push((await getFavoriteFromFirebase(keys[i])).data);
        }

        return { data: favorites, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const firebaseFavoritesListener = async (uid, callBack) => {
    if (global.firebaseFavoritesListenerOff) {
        global.firebaseFavoritesListenerOff();
    }

    try {
        const ref = database().ref(`/user_favorites/${uid}`);
        ref.on('value', d => callBack(d.val()));

        global.firebaseFavoritesListenerOff = ref.off;

        return { data: null, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};