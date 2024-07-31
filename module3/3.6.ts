{
    // getter and setter

    class BankAccount {
        readonly id : number;
        public name : string;
        protected _balance : number
        // private _balance : number

        constructor(id : number, name : string, balance : number){
            this.id = id
            this.name = name
            this._balance = balance
        }

        // setter 

        set deposit (amount : number){
            this._balance = this._balance + amount
        }

    //   public  addDeposit(amount : number){
    //         this._balance = this._balance + amount
    //     }


    // getter

    get balance (){
        return this._balance
    }

    //    public getBalance(){
    //         return this._balance
    //     }
    }


    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }


    const goribManusherAccount = new BankAccount(234, 'Goribs', 21)

    // goribManusherAccount.balance = 0

    // goribManusherAccount.addDeposit(19) // function call kore

    goribManusherAccount.deposit = 5

    // const balance = goribManusherAccount.getBalance() // function call kore



    const myBalance = goribManusherAccount.balance  //getter use kore

    console.log(myBalance);






}