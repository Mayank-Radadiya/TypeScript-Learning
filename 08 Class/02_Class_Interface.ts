interface Photo { 
    id: number;
    cameraMode: string;
    location: string;
}

interface story {
    video : string;
    cerateVideo() : void
}

//cerate class which has all properties from Photo interface

class Instagram implements Photo {
  constructor(
    public id: number,
    public cameraMode: string,
    public location: string
  ) {}

  // some method or function
} 

class Youtube implements Photo, story {
  constructor(
    public id: number,
    public cameraMode: string,
    public location: string,
    public video: string
  ) {}

  cerateVideo(): void {
    console.log("creating video");
  }
}

export{}