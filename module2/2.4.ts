{
  // generic with interface

  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike ?: Y
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Mohosin",
    computer: {
      brand: "Asus",
      model: "DKE33",
      releaseYear: 2014,
    },
    smartWatch: {
      brand: "EKFJ",
      model: "dlk",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Yamaha {
    model : string,
    engineCapacity : string
  }

  const richDeveloper: Developer<AppleWatch, Yamaha> = {
    name: "Jhankar",
    computer: {
      brand: "Hp",
      model: "DKE3d3",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "apple",
      model: "edlk",
      heartTrack: true,
      sleepTrack: true,
    },
    bike : {
        model : 'DFSF',
        engineCapacity : '100CC'
    }
  };
}
