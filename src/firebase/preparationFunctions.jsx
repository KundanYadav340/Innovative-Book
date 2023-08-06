import { app ,db} from "./initializeApp";
import { query,limit, collection, doc, setDoc, getDocs, orderBy, collectionGroup } from "firebase/firestore"; 

// const subjectRef = collection(db, "stream/47WQWCWWr3QRK8pXZa2k/subjects");
export async function  fetchSubjectNames(path) {
    const streamRef = collection(db, path);
    const q = query(streamRef);
      const snapshot= await getDocs(q);
        var post = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
        return  post;
}
export async function  fetchChapterNames(path) {
    const streamRef = collectionGroup(db, path);
    const q = query(streamRef);
      const snapshot= await getDocs(q);
        var post = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
        return post;
}