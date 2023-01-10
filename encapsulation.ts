class BankAccount {
    private balance: number;

    constructor(private name: string, initialBalance: number) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

const account = new BankAccount("Alice", 100);

console.log(account.getBalance()); // Output: 100

account.deposit(50);

console.log(account.getBalance()); // Output: 150

account.withdraw(75);

console.log(account.getBalance()); // Output: 75