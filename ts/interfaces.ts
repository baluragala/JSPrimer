enum Genre { Jazz, Pop, Techno, Funk }

interface Album {
    id: number;
    name: string;
    artist: string;
    genre: Genre;
    numberOfSongs?: number; // Optional Properties
}

let album:Album = {}