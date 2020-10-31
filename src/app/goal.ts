// export class Goal {
//     id: number;
//     name: string;
//     description: string;
//   }

// export class Goal {
//     showDescription: boolean;
//     constructor(public id: number,public name: string,public description: string){
//       this.showDescription=false;
//     }
//   }

  export class Goal {
    public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
      this.showDescription=false;
    }
  }
  