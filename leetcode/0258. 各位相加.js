/**
 * 我的思路还是转字符串相加
 *  网友思路
 *   X = 100*a + 10*b + c = 99*a + 9*b + (a+b+c)
 *  所以只要对9取余即可 return (num - 1) % 9 + 1;
 *    也相当于if num > 9:
            num = num % 9
            if num == 0:
                return 9
        return num
      只是上面的方法减少了判断
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num.toString().length !== 1) {
    num = [...num.toString()].reduce((pre, cur) => pre + Number(cur), 0);
  }
  return num;
};

console.log(addDigits(2222));
console.log(addDigits(48));
console.log(addDigits(99));
