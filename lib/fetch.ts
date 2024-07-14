import { db } from "@/firebase/config";
import { collection, getDocs, getDoc, query, orderBy, limit, startAfter, DocumentSnapshot, doc } from "firebase/firestore";
import { PitchType } from '@/lib/types';

const fetch_limit = 6;

export const fetchInitialPitches = async () => {
    let lastDoc: DocumentSnapshot | null = null;
    let pitches: PitchType[] = [];

    const pitchesRef = collection(db, "pitches");
    const q = query(pitchesRef, orderBy("rating", "desc"), limit(fetch_limit));
    const data = await getDocs(q);

    data.forEach(doc => {
        const pitch = doc.data();
        pitch.id = doc.id;

        pitches.push(pitch as PitchType);
    });

    lastDoc = data.docs[data.docs.length - 1];
    return { pitches, lastDoc };
}

export const fetchNextPitches = async (key: DocumentSnapshot) => {
    let lastDoc: DocumentSnapshot | null = key;
    let nextPitches: PitchType[] = [];

    const pitchesRef = collection(db, "pitches");
    const q = query(pitchesRef, orderBy("rating", "desc"), limit(fetch_limit), startAfter(lastDoc));
    const data = await getDocs(q);

    if (data.empty) {
        lastDoc = null;
        return { nextPitches, lastDoc };
    }

    data.forEach(doc => {
        const pitch = doc.data();
        pitch.id = doc.id;

        nextPitches.push(pitch as PitchType);
    });

    lastDoc = data.docs[data.docs.length - 1];
    return { nextPitches, lastDoc };
}


export const fetchRecommendedPitches = async (pitchesId: string[]) => {
    let pitches: PitchType[] = [];

    pitchesId.forEach(async (id) => {
        const ref = doc(db, 'pitches', id);
        const pitchDoc = await getDoc(ref);

        pitches.push(pitchDoc.data() as PitchType);
    })

    return pitches;
}