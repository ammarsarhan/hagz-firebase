export interface PitchType {
    name: string,
    id: string,
    description: string,
    price: number,
    rating: number,
    size: string,
    ballProvided: boolean,
    groundType: string,
    place: string,
    mapLink: string,
    owner: string,
    coordinates: {latitude: number, longitude: number}
    images: string[],
    reservations: [],
    recommended: [],
}