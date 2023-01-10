abstract class Payment {
    constructor(protected amount: number) {}
    abstract pay(): void;
}

class CreditCardPayment extends Payment {
    constructor(amount: number, private cardNumber: string, private cardHolder: string, private expirationDate: string) {
        super(amount);
    }
    pay(): void {
        console.log(`Paying ${this.amount} using credit card ${this.cardNumber}`);
    }
}

class PayPalPayment extends Payment {
    constructor(amount: number, private email: string, private password: string) {
        super(amount);
    }
    pay(): void {
        console.log(`Paying ${this.amount} using PayPal account ${this.email}`);
    }
}

const creditCardPayment = new CreditCardPayment(100, '1234123412341234', 'John Doe', '01/2022');
creditCardPayment.pay();

const payPalPayment = new PayPalPayment(100, 'johndoe@example.com', 'password');
payPalPayment.pay();