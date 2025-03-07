// eurosFormatter.js (assuming this is a simple formatter)
export default {
  format: (amount) => `€${amount.toFixed(2)}`,
};

// Wallet class
class Wallet {
  constructor(name, cash) {
    this.name = name;
    this.cash = cash;
  }

  deposit(amount) {
    this.cash += amount;
  }

  withdraw(amount) {
    if (this.cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }
    this.cash -= amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring €${amount.toFixed(2)} from ${this.name} to ${wallet.name}`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance: €${this.cash.toFixed(2)}`
    );
  }
}

// Main function to demonstrate the Wallet class
function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
