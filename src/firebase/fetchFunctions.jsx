import { app ,db} from "./initializeApp";
import { query,limit, collection, doc, setDoc, getDocs, orderBy } from "firebase/firestore"; 

// const subjectRef = collection(db, "stream/47WQWCWWr3QRK8pXZa2k/subjects");
export async function  fetchFromCollection(path) {
    const subjectRef = collection(db, path);
    const q = query(subjectRef);
      const snapshot= await getDocs(q);
        var post = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
        return  post;
}
export async function  fetchTopicNames(path) {
    const topicRef = collection(db, path);
    const q = query(topicRef, orderBy("topic_order"));
      const snapshot= await getDocs(q);
        var post = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
        return post;
}

