/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.balance = balance;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  // console.log("before transfer: ", this.balance);
  if (
    this.balance[account1 - 1] === undefined ||
    this.balance[account2 - 1] === undefined
  ) {
    return false;
  }
  if (this.balance[account1 - 1] - money < 0) {
    return false;
  }
  this.balance[account1 - 1] -= money;
  this.balance[account2 - 1] += money;
  // console.log("after: ", this.balance);
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  // console.log("before deposit: ", this.balance);
  if (this.balance[account - 1] === undefined) {
    return false;
  }
  this.balance[account - 1] += money;
  // console.log("after: ", this.balance);
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  // console.log("before withdraw: ", this.balance);
  if (this.balance[account - 1] === undefined) {
    return false;
  }
  if (this.balance[account - 1] - money < 0) {
    return false;
  }
  this.balance[account - 1] -= money;
  // console.log("after: ", this.balance);
  return true;
};

// Your Bank object will be instantiated and called as such:
var bank = new Bank([10, 100, 20, 50, 30]);

const arr = [];
arr[0] = bank.withdraw(3, 10); // 返回 true ，账户 3 的余额是 $20 ，所以可以取款 $10 。
// 账户 3 余额为 $20 - $10 = $10 。
arr[1] = bank.transfer(5, 1, 20); // 返回 true ，账户 5 的余额是 $30 ，所以可以转账 $20 。
// 账户 5 的余额为 $30 - $20 = $10 ，账户 1 的余额为 $10 + $20 = $30 。
arr[2] = bank.deposit(5, 20); // 返回 true ，可以向账户 5 存款 $20 。
// 账户 5 的余额为 $10 + $20 = $30 。
arr[3] = bank.transfer(3, 4, 15); // 返回 false ，账户 3 的当前余额是 $10 。
// 所以无法转账 $15 。
arr[4] = bank.withdraw(10, 50); // 返回 false ，交易无效，因为账户 10 并不存在。

console.log(arr);
