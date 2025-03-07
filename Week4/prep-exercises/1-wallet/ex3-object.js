// eurosFormatter.js (simple formatter)
const eurosFormatter = {
  format: (amount) => `€${amount.toFixed(2)}`,
};

// Create a wallet using an object literal
function createWallet(name, cash = 0) {
  return {
    name: name,
    cash: cash,

    deposit: function (amount) {
      this.cash += amount;
    },

    withdraw: function (amount) {
      if (this.cash - amount < 0) {
        console.log(`Insufficient funds!`);
        return 0;
      }
      this.cash -= amount;
      return amount;
    },

    transferInto: function (wallet, amount) {
      console.log(
        `Transferring ${eurosFormatter.format(amount)} from ${this.name} to ${
          wallet.name
        }`
      );
      const withdrawnAmount = this.withdraw(amount);
      wallet.deposit(withdrawnAmount);
    },

    reportBalance: function () {
      console.log(
        `Name: ${this.name}, balance: ${eurosFormatter.format(this.cash)}`
      );
    },
  };
}

// Main function to demonstrate wallet operations
function main() {
  const walletJack = createWallet('Jack', 100);
  const walletJoe = createWallet('Joe', 10);
  const walletJane = createWallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
