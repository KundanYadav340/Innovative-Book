import { app ,db} from "./initializeApp";
import { query,limit, collection,addDoc, doc, setDoc, getDocs } from "firebase/firestore"; 


 export async function  insertTopicName(path, data){
    await addDoc(collection(db, path), data);
}

export async function  insertPracticeQuestion(path, data){
    await addDoc(collection(db, path), data);
}