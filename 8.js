class Bank {
    balance = 0;
    firstName = "";
    lastName = "";
  
    optioncall() {
      console.log('<-->')
      let selectedOption = prompt(
        "Select an Option.\n1.Create Account\n2.Deposite Amount\n3.WithDraw Amount\n4.Check Balance\n5.Transfer Amount\n"
      );
      this.selectedOption = parseInt(selectedOption);
      switch (this.selectedOption) {
        case 1: {
          this.createAccount();
          break;
        }
        case 2: {
          this.depositeAmount();
          break;
        }
        case 3: {
          this.withdrawAmount();
          break;
        }
        case 4: {
          this.checkBalance();
          break;
        }
        case 5: {
          this.TransferAmount();
          break;
        }
        default:
          console.log("invalid option");
          break;
      }
    }
  
    constructor() {
      this.optioncall();
    }
  
    createAccount() {
      this.firstName = prompt("Enter first name:");
      this.lastName = prompt("Enter second name:");
      console.log("Account Created...");
      this.optioncall();
    }
  
    depositeAmount() {
      let deposit = prompt("Enter amount to deposit:");
      this.balance = this.balance + deposit;
      console.log("Total Balance:", this.balance);
      this.optioncall();
    }
  
    withdrawAmount() {
      let withdraw = prompt("Enter amount to withdraw:");
      this.balance = this.balance - withdraw;
      console.log("Total Balance:", this.balance);
      this.optioncall();
    }
  
    checkBalance() {
      console.log("Balance:", this.balance);
      this.optioncall();
    }
  
    TransferAmount() {
      let toAccount = prompt("Enter Account Number to Transfer:");
      let transfer = prompt("Enter amount to transfer:");
      this.balance = this.balance - transfer;
      console.log(`${transfer}rs transfered to account_no ${toAccount}`);
      console.log("Total Balance:", this.balance);
      this.optioncall();
    }
  }
  
  let customer = new Bank();
  