import { firestore, storage } from "./firebaseConfig";

export const saveUserLocationData = async (userId, address, location) => {
    if (!userId || !address || !location) {
        throw new Error("Missing Invalid arguments for saveUserLocationDat parameters");
        return;
    }

    try {
        const userRef = firestore.collection("users").doc(userId);
        await userRef.set({
            address,
            location
        }, { merge: true });

    } catch (error) {
        console.error("Error saving user location data:", error);
        throw error;
    }
};

export const upLoadImageToStorage = async (imageUrl) => {
    if (!imageUrl) return null;

    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const ref = storage.ref().child(`userImages/${new Date().toISOString()}`);
        const snapshot = await ref.put(blob);
        return await snapshot.ref.getDownloadURL();
    }
    catch (error) {
        console.error("Error uploading image to storage:", error);
        throw error;
    }
};
