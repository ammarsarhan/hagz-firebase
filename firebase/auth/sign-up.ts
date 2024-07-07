import firebase from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";

const auth = getAuth(firebase);

export default async function signUp(name: string, email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password).then();
        await updateProfile(result.user, {displayName: name}).catch((e) => {error = e});
    } catch (e) {
        error = e;
    }

    return { result, error };
}
