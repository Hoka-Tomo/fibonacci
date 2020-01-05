'use strict';
// memoという名前のMapを作成（キーに順番、値に答えを格納）
const memo = new Map();
// 0番目、1番目の答えは予め定義されているので、格納。
memo.set(0, 0);
memo.set(1, 1);
// もしMapがnをキーとした答えを持っていれば、その値をそのまま関数の値として返し（return memo.get(n);）、そうでない場合は再帰関数を計算して求めてMapに格納（memo.set）した後に返す（return value;）という処理。
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}