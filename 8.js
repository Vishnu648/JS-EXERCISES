class Bank{
    balance=0;
    firstName=""
    lastName=""
    createAccount(){
        this.firstName=prompt('Enter first name:')
        this.lastName=prompt('Enter second name:')
        console.log('Account Created...');
    }

    depositeAmount(){
        let deposit=prompt('Enter amount to deposit:')
        this.balance=this.balance+deposit;
        console.log('Total Balance:',this.balance);
    }


    withdrawAmount(){
        let withdraw=prompt('Enter amount to withdraw:')
        this.balance=this.balance-withdraw;
        console.log('Total Balance:',this.balance);
    }

    checkBalance(){
        console.log('Balance:',this.balance)
    }
}

let customer=new Bank();
customer.createAccount();
customer.depositeAmount();
customer.withdrawAmount();
customer.checkBalance();