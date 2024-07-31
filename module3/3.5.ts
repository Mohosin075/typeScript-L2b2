{
    // access modifiers

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

        addDeposit(amount : number){
            this._balance = this._balance + amount
        }

        getBalance(){
            return this._balance
        }
    }


    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }


    const goribManusherAccount = new BankAccount(234, 'Goribs', 21)

    // goribManusherAccount.balance = 0

    goribManusherAccount.addDeposit(19)
    const balance = goribManusherAccount.getBalance()
    console.log(balance);







}