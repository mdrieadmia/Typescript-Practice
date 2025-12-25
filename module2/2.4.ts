{
    // Interface Generic

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch : T
    }

    const newDeveloper : Developer<{brand: string, model: string}> = {
        name: "Riead",
        computer : {
            brand: "HP",
            model: 'X-255UR',
            releaseYear: 2002,
        },
        smartWatch: {
            brand: 'Apple',
            model: "M4", 
        }
    }
    const newDeveloper2 : Developer<{brand: string, model: string, isHeartTrack: boolean}> = {
        name: "Riead",
        computer : {
            brand: "Asus",
            model: 'X-255UR',
            releaseYear: 2002,
        },
        smartWatch: {
            brand: 'Xaomi',
            model: "M4", 
            isHeartTrack: true,
        }
    }
}