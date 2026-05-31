// class BankAccount {
//   // Private field: cannot be accessed directly outside this class
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   // Public method to deposit money safely
//   deposit(amount) {
//     if (amount > 0) this.#balance += amount;
//   }

//   // Getter method to view the private property safely
//   get balance() {
//     return `Your balance is $${this.#balance}`;
//   }
// }

// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.balance); // Output: Your balance is $150
// // console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class



class BankAccount {
  // Private field: cannot be accessed directly outside this class
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public method to deposit money safely
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  // Getter method to view the private property safely
  get balance() {
    return `Your balance is $${this.#balance}`;
  }
}


