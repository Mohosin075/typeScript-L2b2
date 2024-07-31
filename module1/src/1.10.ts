{


    type FrontEndDeveloper = 'juniorDeveloper' | 'FokiraDeveloper'
    type FullStackDeveloper = 'juniorDeveloper' | 'FrontEndDeveloper'

    const developer : FrontEndDeveloper | FullStackDeveloper = 'FokiraDeveloper';

    type User = {
        name : string,
        age : number,
        gender : 'male' | 'female',
        blood : 'A+' | 'B+' | 'O+'
    }

    const user : User={
        name : 'dklf',
        age : 9203,
        gender : "male",
        blood : 'O+'

    }


    type FrontEnd = {
        skill : string[],
        convention1 : 'Front End'
    }
    type BackEnd = {
        skill : string[],
        convention2 : "Back End"
    }

    type FullStack = FrontEnd & BackEnd

    const fullStack : FullStack = {
        skill : [],
        convention1 : 'Front End',
        convention2 : 'Back End'
    }






}