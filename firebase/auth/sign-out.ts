import firebase from "@/firebase/config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase);

export default async function unAuthenticateUser(callback: Function) {
    let result = null,
        error = null;
    try {
        result = await signOut(auth).then(callback());
    } catch (e) {
        error = e;
    }

    return { result, error };
}