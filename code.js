var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function strLength(str) {
    return str.length;
}
export function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
export function sortNumArr(numArr) {
    return numArr.sort((a, b) => a - b);
}
export function sqrt(num) {
    if (num < 0) {
        throw new Error("You cannot calculate the square root of a negative number");
    }
    return Math.sqrt(num);
}
export function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
export function fetchUserData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) {
            throw new Error('there is no such id');
        }
        const data = yield res.json();
        return data;
    });
}
export function fibonacci(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 2]) {
            if (arr[i] + arr[i + 1] !== arr[i + 2]) {
                throw new Error('not a fibonacci arr');
            }
        }
    }
    return arr[arr.length - 1] + arr[arr.length - 2];
}
