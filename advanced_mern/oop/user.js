class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.accountBalance = 0;
    }
  
    makeDeposit(amount) {
      this.accountBalance += amount;
    }
  
    makeWithdrawal(amount) {
      this.accountBalance -= amount;
    }
    transferMoney(otherUser, amount){
      if (this.accountBalance<amount){
        console.log("you don't have this amount in your account ")
      }
      else{
        this.accountBalance-=amount;
        otherUser.accountBalance+=amount
      }
    }
    displayInfo() {
      console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
    }
  }
  
  const crow = new User("Crow T. Robot", "hamdingers@gizmonic.com");
  const tom = new User("Tom Servo", "tommonster@gizmonic.com");
  
  tom.makeDeposit(200);
  tom.transferMoney(crow,300)
  crow.displayInfo()

  