import firebase from "firebase";

const FirebaseFetch = (callback) =>{
    let firebaseConfig = {
        apiKey: "AIzaSyC6HAfjXdABB74Hm2YqaHsoMyK2_PZf6a4",
        authDomain: "myblog-6d496.firebaseapp.com",
        databaseURL: "https://myblog-6d496.firebaseio.com",
        projectId: "myblog-6d496",
        storageBucket: "",
        messagingSenderId: "913036649082",
        appId: "1:913036649082:web:bfe3046095008542"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let db = firebase.database();
    let ref = db.ref();

    ref.once("value")
        .then(snapshot=> {
            callback(snapshot.val());
        });
};

export default FirebaseFetch;
