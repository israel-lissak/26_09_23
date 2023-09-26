import {expect, test} from 'vitest'
import {strLength, isPalindrome, sortNumArr, sqrt, sumArray, fetchUserData, fibonacci} from './code'
import { error } from 'console'

test('return str length', () => {
    expect(strLength('hello world')).toBe(11)
})

test('checks is str i a palindrome', () => {
    expect(isPalindrome('kayak')).toBe(true)
})

test('sorting an arry of numbers', () => {
    expect(sortNumArr([1,3,2])).toEqual([1,2,3])
})

test('returns square root', () => {
    expect(() => sqrt(-16)).toThrowError("You cannot calculate the square root of a negative number")
})

test('return arr sum', () => {
    expect(sumArray([1, 2, 3])).toBe(6)
    expect(sumArray([1, 2, 3, 4])).toBeGreaterThan(9)
})

test('checks data from fetch', async () => {
    const data = await fetchUserData(2);
    expect(data).toEqual(
        {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: { lat: '-43.9509', lng: '-34.4618' }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      })
    expect(fetchUserData(1234567)).rejects.toThrowError('there is no such id')
})

test('checks fibonacci arr', () => {
    expect(fibonacci([0,1,1,2,3,5])).toBe(8);
    expect(() => fibonacci([1,2,3,4])).toThrowError('not a fibonacci arr')
})
