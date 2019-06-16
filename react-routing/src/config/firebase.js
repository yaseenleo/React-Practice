import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKqnOx3whVTOPnoc6K9AbS51nK0nUIcnY",
    authDomain: "banquet-inn.firebaseapp.com",
    databaseURL: "https://banquet-inn.firebaseio.com",
    projectId: "banquet-inn",
    storageBucket: "banquet-inn.appspot.com",
    messagingSenderId: "84905194109",
    appId: "1:84905194109:web:444a2b9b16a65a3d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function getRealtimeTodo() {
    return new Promise((resolve, reject) => {
        // db.collection('todo').get().then(snapshot => {
        db.collection('todo').onSnapshot(snapshot => {
            const temp = [];

            snapshot.forEach(doc => {
                const obj = {id: doc.id, ...doc.data()}
                temp.push(obj);
            })
            console.log('getRealtimeTodo ===>', temp);
            resolve(temp);
        })
        //db.collection('todo').add({})
        //db.collection('users').doc('<id>').get().then(doc => {
            // doc.data()
        // })
        //db.collection('user').where('username', '==', 'kashif').get().then(doc => {
            
        // })
    })
}

export default firebase;
export {
    getRealtimeTodo
}