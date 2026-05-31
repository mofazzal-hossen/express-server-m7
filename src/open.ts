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


// ১. প্যারেন্ট ক্লাস
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} লগইন করেছেন।`);
    }
}

// ২. চাইল্ড ক্লাস (Admin ইউজার থেকে সব কিছু Inherit করবে)
class Admin extends User {
    constructor(name, email, role) {
        // super() ব্যবহার করে প্যারেন্ট ক্লাসের কনস্ট্রাক্টরকে কল করা হয়
        super(name, email); 
        this.role = role;
    }

    deleteProduct() {
        console.log(`${this.name} একটি প্রোডাক্ট ডিলিট করেছেন।`);
    }
}

// অবজেক্ট তৈরি
const generalUser = new User("Munna", "munna@example.com");
const adminUser = new Admin("System Admin", "admin@suncart.com", "SuperAdmin");

generalUser.login(); // কাজ করবে
adminUser.login();    // কাজ করবে (Inheritance এর কারণে)
adminUser.deleteProduct(); // শুধু অ্যাডমিন পারবে
// generalUser.deleteProduct(); // এরর দিবে (সাধারণ ইউজারের এই ক্ষমতা নেই)