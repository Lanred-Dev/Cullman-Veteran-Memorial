import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, collection, Firestore, CollectionReference } from "firebase/firestore";
import { getAnalytics, type Analytics } from "firebase/analytics";
import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
} from "$env/static/private";

const app: FirebaseApp = initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
});

export const firebase: Firestore = getFirestore(app);
export const veterans: CollectionReference = collection(firebase, "veterans");

// Determine if this is the client side and only turn on analytics if it is.
if (typeof window !== "undefined") {
    const analytics: Analytics = getAnalytics(app);
    analytics.app.automaticDataCollectionEnabled = true;
}
