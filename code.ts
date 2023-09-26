export function strLength(str: string): number{
    return str.length;
}

export function isPalindrome(str: string): boolean{
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

export function sortNumArr(numArr: number[]): number[] {
    return numArr.sort((a,b) => a-b)
}

export function sqrt(num: number):number {
    if (num < 0) {
        throw new Error("You cannot calculate the square root of a negative number");
    }
    return Math.sqrt(num);
}

export function sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

export async function fetchUserData(id:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        throw new Error('there is no such id')
    }
    const data = await res.json();    
    return data
}

export function fibonacci(arr: number[]): number{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+2]){
            if (arr[i] + arr[i+1] !== arr[i+2]) {
                throw new Error('not a fibonacci arr')
            }
        }
    }
    return arr[arr.length-1] + arr[arr.length-2]
}