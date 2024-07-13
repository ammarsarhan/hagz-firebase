import { db } from "@/firebase/config";
import { collection, getDocs, query, orderBy, limit, startAfter, DocumentSnapshot } from "firebase/firestore";
import { PitchType } from '@/lib/types';

export const fetchInitialPitches = async () => {
    let lastDoc: DocumentSnapshot | null = null;
    let pitches: PitchType[] = [];

    const pitchesRef = collection(db, "pitches");
    const q = query(pitchesRef, orderBy("rating", "desc"), limit(1));
    const data = await getDocs(q);

    data.forEach(doc => {
        const pitch = doc.data();
        pitch.id = doc.id;

        pitches.push(pitch);
    });

    lastDoc = data.docs[data.docs.length - 1];
    return { pitches, lastDoc };
}

export const fetchNextPitches = async (key: DocumentSnapshot) => {
    let lastDoc: DocumentSnapshot | null = key;
    let nextPitches: PitchType[] = [];

    const pitchesRef = collection(db, "pitches");
    const q = query(pitchesRef, orderBy("rating", "desc"), limit(1), startAfter(lastDoc));
    const data = await getDocs(q);

    if (data.empty) {
        lastDoc = null;
        return { nextPitches, lastDoc };
    }

    data.forEach(doc => {
        const pitch = doc.data();
        pitch.id = doc.id;

        nextPitches.push(pitch);
    });

    lastDoc = data.docs[data.docs.length - 1];
    return { nextPitches, lastDoc };
}