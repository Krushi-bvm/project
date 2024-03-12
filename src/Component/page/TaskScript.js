





// ------question 19
const array1 = [1, 0, 2, 3, 4]
const array2 = [3, 5, 6, 7, 8, 13]

var sum = array1.map((nam, index) => {
    return nam + array2[index]
})
console.log(sum)


//---question 20 --//

// let chekduplicate = (input_array) => {
//     let dublicateValue = []
//     for (num in input_array) {
//         for (num2 in input_array) {
//             if (num === num2) {
//                 continue;
//             }
//             else {
//                 if (input_array[num] === input_array[num2]) {
//                     dublicateValue.push(input_array[num]);
//                 }
//             }
//         }
//     }
//     return [...new Set(dublicateValue)];
// }
let chekduplicate = (arr) => {
    let arr1 = arr.filter((item, index) => arr.indexOf(item) === index)
    return arr1


}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(chekduplicate(arr), 'dupluicate Element');

//-- question 21 --//
let flateArray = [[1, [2], [3, [[4]]], [5, 6]]]
let flateArray2 = [[1, [2], [3, [[4]]], [5, 6]], true]

let result = flateArray.flat(Infinity)
let result2 = flateArray2.flat(2)
console.log(result, 'flateArray1')
console.log(result2.filter((num) =>
    typeof num === 'number'
), 'flateArray2')

//--question 22--//
const numArr1 = new Set([1, 2, 3]);
// Another set
const numArr2 = new Set([100, 2, 1, 10]);

let union = new Set([...numArr1, ...numArr2]);
// console.log(union([1,2,3],[100,2,1,10]))
// let result = union.sort(function(a, b){return a - b});
console.log(union);
//--question 23--//
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let symDifference = arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((y) => !arr1.includes(y)));
console.log(symDifference);
//--question 24 --//
let number = [10, 20, 10, 40, 50, 60, 70];
var twoSum = function (nums, target) {
    let result = [];
    nums.map((x, i) => {
        nums.map((y, j) => {
            if (i != j && x + y == target) {
                result = [i, j];
            }
        });
    });
    return result;
};
console.log("question28", twoSum(number, 50));
//--question 28 --//
function longest_common_starting_substring(arr1) {
    var arr = arr1.concat().sort(),
        a1 = arr[0],
        a2 = arr[arr.length - 1],
        L = a1.length,
        i = 0;

    while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0, i);
}
console.log(longest_common_starting_substring(["go", "google"]));
//--question 30 --//
let arrs = [1, 2, 3]
let arrs2 = [2, 30, 1]
let commenElemet = [...arrs, ...arrs2]
let mergedArr = [...new Set(commenElemet)]
console.log(mergedArr, 'mergedArr')
//--question 29--//

// function num_string_range(start, end, step)
//   {
//     var range = [];
//     if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
//      return false;
//     if (end < start) {
//         step = -step;
//     }
//     if (typeof start == "number") {
//         while (step > 0 ? end >= start : end <= start) {

//             range.push(start);
//             start += step;
//         }
//         }
//       else if (typeof start == "string") {
//         if (start.length != 1 || end.length != 1) {
//             throw TypeError("Strings with one character are supported.");
//         }
//         start = start.charCodeAt(0);
//         end = end.charCodeAt(0);
//         while (step > 0 ? end >= start : end <= start) {
//             range.push(String.fromCharCode(start));
//             start += step;
//         }
//     }
//     else
//        {
//         throw TypeError("Only string and number are supported");
//         }
//     return range;
// }
// console.log(num_string_range('a', "z", 2));
//---question 34 --//
let numarr = [43, 56, 23, 89, 88, 90, 99, 652]
let findLargest = (num = [], target = 0) => {
    return num.sort((a, b) => a - b).reverse()[target - 1]

}
console.log(findLargest(numarr, 4), 'findLargest')

//--questoin 35--//
let rendomeItem = (items) => {
    return items[Math.floor(Math.random() * items.length)]

}

var items = [254, 45, 212, 365, 2543];
console.log(rendomeItem(items))
//---question 36--//
let array_filed = (n, value) => {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, value);
}
console.log(array_filed(6, 0))
console.log(array_filed(4, 11))
//--question 40--//
let array_range = (start, end) => {
    let arr = [];
    end = 4
    for (let i = start; i <= end; i++) {
        arr.push(i)

    }
    return arr
}
console.log(array_range(1, 4))
console.log(array_range(-6, 4))

//---question 41--/



// console.log(rangeBetween(-4,7))
// function numberRange (start, end) {
//     return new Array(end - start).fill().map((d, i) => i = start);
//   }

function rangeOfNumbers(a, b) {
    let arr = [];
    for (a; a <= b; a++) {
        arr.push(a)
    }
    return arr;
}
console.log(rangeOfNumbers(4, 7))
console.log(rangeOfNumbers(-4, 7))


//--question 42 --//
let difference = (arr1, arr2) => {
    let commenElemet = [...arr1, ...arr2]
    let flateArray = commenElemet.flat(Infinity)
    let newArray = [...new Set(flateArray)]

    return newArray

}
console.log(difference([1, 2, 3], [100, 2, 1, 10]), 'question 42')
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]), 'question 42')

//--question 43--//
let unzip = (arr) =>
    arr.reduce(
        (acc, curr) => (curr.map((v, i) => acc[i].push(v)), acc),
        Array.from({
            length: Math.max(...arr.map(x => x.length))
        }).map(x => []),
    )
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));
//--question 44--//
let arrObj = [{ id: "10", nmae: "apple" }, { id: "20", name: "orange" }]
const convertArrayToObject = (array, key) =>
    array.reduce(
        (obj, item) => (
            {
                ...obj,
                [item[key]]: item
            }

        ),
        {}

    );
console.log(convertArrayToObject(arrObj, x => x), 'question 43')
//--question 45--/
let a = [1, 2, 2, 3, 4, 4, 5];
let b = [1, 2, 3, 4, 5]
let c = [1, -2, -2, 3, 4, -5, 6, -5]
console.log([... new Set(a)], "question 45-")
console.log([... new Set(b)]);
console.log([... new Set(c)]);

//---question46 --//
let d = [1, 33, 5]
console.log(d[1])
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(

                permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};
console.log(permutations([1, 33, 5]));
console.log(permutations([1, 3, 5, 7]));
console.log(permutations([2, 4]));

//--question 47--//
const object = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }


}
// only remove object false values not nested false value //
// Object.keys(obj).forEach(key => {
//     if (obj[key] === false) {
//       delete obj[key];
//     }
//   });


const cleanObject = (input) => {
    if (typeof input === 'object') {

        if (Array.isArray(input)) {
            console.log(input, 'gcg')
            return input.map(cleanObject)
                .filter(
                    (item) => item !== false
                )
        }
    }

    return input;
}

console.log(cleanObject(object), "cleanObject", 'question 47');

//--question 48--//
function isPrime(arrNum) {
    for (n of arrNum) {
        if (n == 1 | n > 2 & n % 2 == 0)
            return false
    }
    return true
}

var array = [2, 3, 5, 7];
let arrPrime = [2, 3, 5, 7, 8]


console.log(arrPrime)
console.log(isPrime(array))
console.log(isPrime(arrPrime))
//--question 49 --//
let thiredSmArray = [2, 3, 5, 7, 1]
let thiredSmArrays2 = [2, 3, 0, 5, 7, 8, -2, -4]
let thiredSm = thiredSmArray.sort((a, b) => a - b)
let thiredSm2 = thiredSmArrays2.sort((a, b) => a - b)
console.log(thiredSm[2], 'question 49')
console.log(thiredSm2[2], 'question 49')

//--question 50---//
let arraySum = [2, "11", 3, "a2", false, 5, 7, 1]
let arraySum1 = [2, 3, 0, 8, 7, 5, true, false]

const sumAllNum = (array_sum) => {
    var total = 0;
    array_sum.forEach(element => {
        if (typeof element === 'number') {
            total += element
        }
    });
    return total

}

const resultsums = arraySum.reduce((c, a) =>
    c + (typeof a === 'string' ? 0 : a))

console.log(resultsums)
console.log(sumAllNum(arraySum1))

//---question 60--//
// let chianArray = (array) => {

//     for (let  i = 0; i < array.length-1 ; i++) {

//         if (array[i+1] % array[i] != 0)
//            {
//             return false
//            }
// }
//     return true

// }
function factorChain(arr) {

    return arr.slice(1).every((num, i) => num % arr[i] === 0);
}
console.log(factorChain([2, 4, 8, 16, 32]), 'factorChain')
console.log(factorChain([2, 4, 16, 32, 64]))
console.log(factorChain([2, 4, 16, 32, 68]))


//--question 53--//
let numberArr1 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]
let numberArr2 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]
var allLengths = (arr) => arr.filter(element => Array.isArray(element)).length


console.log(allLengths(numberArr1))
console.log(allLengths(numberArr2))
//--question 4 --//
const specificNumber = (str, length) => {

    if (typeof str == "string" && length > 0) {
        return str.slice(0, length)



    }
}
console.log(specificNumber("Robin Singh", 4))

//--question 5 --//
const abbrev_names = (str1) => {
    var splitName = str1.trim().split(" ")


    if (splitName.length > 0) {
        return (splitName[0] + splitName[1].charAt(0) + '.'


        );

    }

}

console.log(abbrev_names("Robin Singh"))

//question 6--//
const protect_email = (email) => {
    let split = email.split("@")
    let split1 = split[0]
    let avg = split1.length / 2

    split1 = split1.substring(0, (split1.length - avg))

    let split2 = split[1]

    return split1 + "...@" + split2

}
console.log(protect_email("robin_singh@example.com"), 'protect_email')

//--question 7--//
const parameterize = (str) => {
    return str.toLowerCase().replace(/[^a-z']/g, "-");



}
console.log(parameterize("Robin Singh From USA"))

//--question 8 --//
const capitalize_word = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize_word("js string exercises"))

//-- question 9 --//
const capitalize = (str) => {
    var words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let str2 = words.join(" ")

    return str2
}
console.log(capitalize("js string exercises"))

//--question 10 --/
const swapCase = (str) => {
    return str.split("").map(c => c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("")
}
console.log(swapCase('AaBbc'))

//question 11--/
const camelize = (str) => {
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}
console.log(camelize("JavaScript Exercises"))
console.log(camelize("JavaScript exercises"))
console.log(camelize("JavaScriptExercises"))

//question 12--//
const uncamelize = (text, separator) => {
    if (typeof separator == 'undefined') {
        separator = ''
    }
    let texts = text.replace(/[A-z]/g, (word) => separator + word.toLowerCase())


    let s = texts.replace("/^" + separator + "/", '');
    console.log(s, 'texts')


    return s



}
console.log(uncamelize('helloWorld'))
console.log(uncamelize('helloWorld', '-'))
console.log(uncamelize('helloWorld', '_'))
//--question 13---//
const repeat = (str, num) => {

    return str.repeat(num)


}
console.log(repeat('Hal'))
console.log(repeat('Hal', 2))
console.log(repeat('Hal', 3))

//--question 14--//
const insertAtIndex = (str, substring, index) => {
    const arr = str.split('');
    console.log(arr.splice(index))
    arr.splice(index, 0, substring);

    return arr.join('');
}
console.log(insertAtIndex('We are doing Exercises'))
console.log(insertAtIndex('We are doing Exercises', 'javascript'))
console.log(insertAtIndex('We are doing Exercises', 'javascript', 18))
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9]
console.log(x.filter(el => el === 9), 'filter')
console.log(x.find(el => el === 9), 'find')


//--question 15--/

const humanize_formate = (num) => {
    var array = ("" + num).split('').reverse()
    if (array[1] != "1") {
        switch (array[0]) {
            case "1": return num + "st";
            case "2": return num + "nd";
            case "3": return num + "rd";
        }
    }
    return num + "th"
}

console.log(humanize_formate(123), 'question 15')
console.log(humanize_formate(8), 'question 15')
console.log(humanize_formate(301), 'question 15')
console.log(humanize_formate(402), 'question 15')
const exampleArray = [5, 4, 3, 2, 1]
console.log(exampleArray.forEach(x => x * x * x), 'forEach');
//Output: (undefined)

console.log(exampleArray.map(x => x * x * x), 'map');
const numbers = [1, 2, 3, 4];
numbers.forEach((number) => {
    console.log(number * 2);
});
let obj1 = { name: "krushi" }
let obj2 = { name: "krushi" }
console.log(obj1 === obj2)

let y = 10
console.log(y++)
console.log(++y)

let m = 20
let p = "10"
console.log(m + p)
console.log(m - p)

//question 16 --//
const truncate = (str, length = 0, ending = '...') => {
    return (str.length > length) ? str.substring(0, length - ending.length) + ending : str;
}
console.log(truncate("We are doing js exerciese"))
console.log(truncate("We are doing js exerciese", 19))
console.log(truncate("We are doing js exerciese", 15, '!!'))

// question 17 --//
const string_chop = (str, length = 0) => {
    const arr = [];
    let strLength = (str.length / length);
    if (length && str) {
        for (let i = 0; i < strLength; i++) {
            arr.push(str.slice(0, length));

            str = str.slice(length)
        }
    } else {
        arr.push(str)
    }
    return arr;
}
console.log(string_chop("W3resourse"))
console.log(string_chop("W3resourse", 1))
console.log(string_chop("W3resourse", 5))
console.log(string_chop("HelloIamHirenBhuva", 2))


const objskey1 = { name: "krushi" }



const obj = { name: "krushi" };
let key = "hello";
delete Object.assign(obj, { [key]: obj.name })['name'];

obj["full name"] = "hello"

console.log(obj);

let text = "Hello world!";
let resultswdas = text.substring("Hello", 'xdfv');
console.log(resultswdas, 'asfdaG')

// question 18--//
const countSubStirng = (str, searchval) => {
    r = str.match(new RegExp(searchval, 'gi')).length
    return r
}
console.log(countSubStirng("The quick brown fox jumps over the  lazy dog", 'the'));
console.log(countSubStirng("The quick brown fox jumps over the lazy dog", 'fox', false));

// question 19 --//
const escape_HTML = (unsafe) => {
    return unsafe.replaceAll('<', '&lt;').replaceAll('"', '&quot;').replaceAll('>', '&gt')
}
console.log(escape_HTML('<a href="javascript-string-exercises-17.php" target="_blank">'))

// question 20 --//
const formatted_string = (pad, str, position) => {
    if (position == 'l') {
        return (pad + str).slice(-pad.length);
    }
    else {
        return str + pad.substring(0, pad.length)
    }


}
console.log(formatted_string('0000', 1234, 'l'));
console.log(formatted_string('00000000', 123, ''));

// question 21 --//
const repeat_string = (str, repVal = 0) => {
    if (repVal > 0) {

        return str.repeat(repVal)
    } else {
        return 'Error in string or Count'
    }
}
console.log(repeat_string('a', 4))
console.log(repeat_string('a'))
//question 22--//
const subStrAfterChars = (sub, char, position) => {
    let index = sub.indexOf(char)

    if (position == 'b') {

        return sub.substr(index + 1);
    }
    else if (position == 'a') {
        return sub.substr(0, index);
    }

}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));

console.log(subStrAfterChars('w3resource: JavaScript Exercises', '3', 'b'));
//question 23--//
const strip = (str) => {
    return str.trim()

}
console.log(strip('w3resources'))
console.log(strip('  w3resources'))
console.log(strip('w3resources '))

//question 24--//
const truncates = (str, num) => {
    return str.split(' ').slice(0, num).join(' ')

}
console.log(truncates("The quick brown fox jumps over the  lazy dog", 4))
//question --25//
const alphabetize_string = (str) => {
    return str.split('').sort().join('')

}
console.log(alphabetize_string("United State"))
//question -- 30//
const string_endWith = (str, char) => {

    if (str.endsWith(char)) {
        return true
    }
    else {
        return false
    }
}
console.log(string_endWith('JS PHP PYTHON', 'PYTHON'))
console.log(string_endWith('JS PHP PYTHON'))

//question --31//
const escape_HTMLS = (str) => {
    return str.replaceAll('<', '&lt;').replaceAll('&', '&amp;').replaceAll('>', '&gt;').replaceAll('"', "")
}
console.log(escape_HTMLS('PHP&My'))
console.log(escape_HTMLS('3 > 2'))
//question --32//
const remove_non_ascii = (str) => {

    return str.replace(/[^a-z0-9]/gi, '');
}
console.log(remove_non_ascii('???????PHP-MySql??????'))
//question --33//
const remove_non_word = (str) => {
    return str.replace(/[^a-z0-9]/gi, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
//question --34//
const SentanseCase = (str) => {
    const newStr = str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    return newStr
}
console.log(SentanseCase('PHP exercises python exercises'))
//question --35//

const html_strip = (str) => {
    return str.replace(/(<([^>]+)>)/ig, '');
}
console.log(html_strip('<p><strong><em>PHP Exercises</em></strong></p>'))
//question --36//

//  const zeroFill = (number, width, osign) => {
//     var num = '' + Math.abs(number),
//         zerosw = width - num.length,
//         sign = number >= 0;
//     return (sign ? (osign ? '+' : '') : '-') +
//         Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + vbgnum;
// }
// console.log(zeroFill(120,5,'+'))

//question 37 //
const string_compare = (str1, str2) => {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true
    }
    else {
        return false
    }
}
console.log(string_compare('abcd', 'AbcD'))
console.log(string_compare('ABCD', 'Abce'))
//question 38 //
const case_insensitive_search = (str1, str2) => {

    if (str1.toLowerCase().indexOf(str2.toLowerCase()) != -1) {
        return console.log('matched')
    }
    else {
        return console.log('not matched')
    }


}
console.log(case_insensitive_search("JavaScript Exercises", 'exercises'))
console.log(case_insensitive_search("JavaScript Exercises", 'Exercises'))
console.log(case_insensitive_search("JavaScript Exercises", 'Exercisess'))
//question 39 //
const unCapitalize = (str1) => {
    // return str1.split('').map((char , i) => char.toUpperCase()).splice(0).join('')
    return str1.charAt(0).toLowerCase() + str1.slice(1)


}
console.log(unCapitalize('Js string exercises'))
console.log(unCapitalize('Js string Exercises'))
//question 42//
const unCapitalizeWords = (str1) => {
    return str1.toLowerCase()

}
console.log(unCapitalizeWords('JS STRING EXERCISES'))
// question 43 //
const isUpperCase = (str, index) => {
    return str[index] == str[index].toUpperCase()

}
console.log(isUpperCase('Js STRING EXERCISES', 1))

//question 44// 
const isLowerCase = (str, index) => {
    return str[index] == str[index].toLowerCase()

}
console.log(isLowerCase('Js STRING EXERCISES', 1),'lower')
//question 45//
const humanize = (num) => {
    //  var d = num%10;
    //  var ch;
    //  if(d == 1)
    //  {
    //      ch = 'st';
    //  }
    //  else if(d == 2)
    //  {
    //      ch='nd';
    //  }
    //  else if(d == 3)
    //  {
    //      ch='rd';
    //  }
    //  else
    //  {
    //      ch='th';
    //  }


    switch (num % 10) {
        case 1: return num + 'st';
        case 2: return num + 'nd';
        case 3: return num + 'td'

    }
    return num + 'th'
}
console.log(humanize(1))
console.log(humanize(20))
console.log(humanize(302))
//question 46//
const startWith = (mainStr, str) => {
    if (mainStr.startsWith(str)) {
        return true

    }
    else {
        return false
    }


}
console.log(startWith('js string exercises', 'js'))
//question 47//
const endsWith = (mainStr, str) => {
    if (mainStr.endsWith(str)) {
        return true
    } else {
        return false
    }

}
console.log(endsWith('js string exercises', 'exercises'))
//question 48//
const successor = (str) => {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        length = alphabet.length,
        result = str,
        i = str.length;

    while (i >= 0) {
        var last = str.charAt(--i),
            next = '',
            carry = false;

        if (isNaN(last)) {
            index = alphabet.indexOf(last.toLowerCase());

            if (index === -1) {
                next = last;
                carry = true;
            }
            else {
                var isUpperCase = last === last.toUpperCase();
                next = alphabet.charAt((index + 1) % length);
                if (isUpperCase) {
                    next = next.toUpperCase();
                }
                carry = index + 1 >= length;
                if (carry && i === 0) {
                    var added = isUpperCase ? 'A' : 'a';
                    result = added + next + result.slice(1);
                    console.log(result, 'resul')
                    break;
                }
            }
        }
        else {
            next = +last + 1;
            if (next > 9) {
                next = 0;
                carry = true;
            }
            if (carry && i === 0) {
                result = '1' + next + result.slice(1);
                break;
            }
        }

        result = result.slice(0, i) + next + result.slice(i + 1);
        if (!carry) {
            break;
        }
    }
    return result;
}
console.log(successor('abcd'));
console.log(successor('3456'));

//question 49//
const guid = (len) => {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charlen = chars.length;
    length = len || 32;
    for (var i = 0; i < length; i++) {

        buf.push(chars[Math.floor(Math.random() *
            charlen
        )])
    }
    return buf.join('')


}
console.log(guid());
console.log(guid(15));
//question 52//
const test = (words) => {
    const upperChars = words.toUpperCase()
        .replace(/[^A-Z]/g, '')
    const adjacentDiffList = []
    for (let i = 0; i < upperChars.length - 1; i++) {

        const { [i]: char, [i + 1]: adjacentChar } = upperChars

        if (char !== adjacentDiffList) {
            adjacentDiffList.push(Math.abs(char.charCodeAt() - adjacentChar.charCodeAt()))

        }
    }
    for (let i = 0; i < adjacentDiffList.length - 1; i++) {

        const { [i]: charDiff, [i + 1]: secondCharDiff } = adjacentDiffList



        if (charDiff > secondCharDiff) {
            return false
        }
    }
    return true


}
console.log(test('acgl'))
console.log(test('aebc'))
//question 53//
// flatcase refers to the use of lowercase letters, with no spaces between words.
const flatCase = (varname) => {
    if (typeof varname !== 'string') {
        return console.error('it must be string.')
    }
    const pat = /^[a-z]*$/
    return pat.test(varname)

}

console.log(flatCase('java exercises'), 'flatCase')
console.log(flatCase('javascriptexercises'), 'flatCase')
console.log(flatCase(1234), 'flatCase')
//question 54 //
// Kebab case is a way of writing phrases without spaces, where spaces are replaced with hyphens - , and the words are typically all lower case.
const kebabCase = (text) => {
    if (typeof text !== 'string') {
        return console.error('It must be string.', 'kebabCase')
    }
    const part = /(\w+)-(\w)([\w-]*)/
    return part.test(text) && !text.includes('_')

}

console.log(kebabCase('j'), 'kebabCase')
console.log(kebabCase('Java-Exercises'))
console.log(kebabCase('JavaScript-Exercises'))
console.log(kebabCase('javascript_exercises'))
console.log(kebabCase(12356))

//question 55//
// A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once
const pangram = (text) => {
    if (typeof text !== 'string') {
        return console.error('It must be string.', 'pangram')
    }
    const result = new Set()
    for (const str of text.toUpperCase()) {
        if (/[A-Z]/.test(str)) {
            result.add(str)
        }
    }

    return result.size === 26

}


console.log(pangram("The quick brown fox jumps over the lazy dog"))
console.log(pangram("Waltz, bad nymph, for quick jigs vex."))
console.log(pangram("The five boxing wizards jump quickly."))
console.log(pangram("The boxing wizards jump quickly."))
console.log(pangram(12356))
// question 56//
// A PascalCase naming convention capitalizes the first letter of each compound word in a variable
const pascal = (text) => {
    if (typeof text !== 'string') {
        return console.error('It must be string.', 'pascal')
    }
    let pattern = /^[A-Z][A-Za-z]*$/
    return pattern.test(text)

}
console.log(pascal("XmlStream"))
console.log(pascal("IOStream"))
console.log(pascal("IEnumerable"))
console.log(pascal("javascript"))
console.log(pascal(12356))

//question 57//
const check_Palindrome = (str) => {
    if (typeof str !== 'string') {
        return console.error('It must be string.', 'Palindrome')
    }
    const arrVal = str.split('')
    const reverseStr = arrVal.reverse().join('')

    if (str == reverseStr) {
        return true
    }
    else {
        return false
    }



}
console.log(check_Palindrome('madam'))
console.log(check_Palindrome('nursesrun'))
console.log(check_Palindrome('fox'))
//question 58//

const frequent = (str) => {
    if (typeof str !== 'string') {
        return console.error('It must be string.', 'Frequent Char')
    }
    let max = 0
    let maxChar = ""
    str.split('').forEach(char => {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
}
console.log(frequent("Madam"))
console.log(frequent("civic"))
console.log(frequent("HellloL223LLL"))
console.log(frequent(12321))

//QUESTION 59 //

function frequentword(str) {
    if (typeof str !== 'string') {
        return console.error('It must be string.', 'Frequent words')
    }
    const result = [];
    // const s = str.toLowerCase();
    const arr = str.split(" ");
    const count = {};
    arr.forEach((word) => {
        if (!count[word]) {
            count[word] = 1;
        } else {
            count[word] += 1;
        }
    });

    let all = Object.keys(count);
    all.forEach((key) => {
        if (count[key] > 1) {
            result.push(key);
        }
    });
    return result;
}

console.log(frequentword("The quick brown fox jumps over the lazy dog"))
console.log(frequentword("Python is a high-level, general-purpose python programming language."))
console.log(frequentword("It was the same man, she was sure of it. It's always the same, Chauncey."))
console.log(frequentword(12321))
//question 60//
const reverse = (str) => {
    if (typeof str !== 'string') {
        return console.error('It must be string.', 'Reverse ')
    }
    return str.split('').reverse().join('')

}
console.log(reverse('abc'))
console.log(reverse('js exercises'))
console.log(reverse(1234))
//question 61//
function longest_Common_Subsequence(text1, text2) {
    const result = new Array(text1.length + 1).fill(null)
        .map(() => new Array(text2.length + 1).fill(null))


    function test(end1, end2) {
        if (end1 === -1 || end2 === -1) {
            return 0
        }
        if (result[end1][end2] !== null) {

            return result[end1][end2]

        }
        if (text1[end1] === text2[end2]) {

            result[end1][end2] = 1 + test(end1 - 1, end2 - 1)
            return result[end1][end2]
        } else {
            result[end1][end2] = Math.max(
                test(end1 - 1, end2),
                test(end1, end2 - 1)
            )
            return result[end1][end2]
        }
    }
    console.log(result, 'result')
    return test(text1.length - 1, text2.length - 1)
}
console.log(longest_Common_Subsequence("abcda", "abcdef"), 'Subsequence')

//question 62//
const longestValidParentheses = (text) => {
    if (typeof text !== 'string') {
        return 'It must be string'
    }
    const n = text.length
    const stack = []
    // storing results
    const result = new Array(n).fill(-Infinity)

    for (let i = 0; i < n; i++) {
        const bracket = text[i]
        if (bracket === ']' && text[stack[stack.length - 1]] === '[') {
            result[i] = 1
            result[stack[stack.length - 1]] = 1
            stack.pop()
        }
        else {
            stack.push(i)
        }
    }
    // summing all adjacent valid
    for (let i = 1; i < n; i++) {
        result[i] = Math.max(result[i], result[i] + result[i - 1])
    }
    // adding 0 if there are none so it will return 0 instead of -Infinity
    result.push(0)
    return Math.max(...result)
}
console.log(longestValidParentheses("[[]"))
console.log(longestValidParentheses("][][]]"))
console.log(longestValidParentheses(""))
// question 64 //
function binary(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}

console.log(binary(100));
console.log(binary(1134));
//question 57//
const is_Palindrome = (str1) => {

    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longest_palindrome(str1) {
    // Initialize variables for maximum length (max_length) and corresponding palindrome (maxp)
    var max_length = 0,
        maxp = '';


    for (var i = 0; i < str1.length; i++) {

        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;
            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }


    return maxp.length;
}


console.log(longest_palindrome("abracadabra"), 'longest_palindrome'
);

console.log(longest_palindrome('maadaem'))
console.log(longest_palindrome('zkksk'))

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
console.log(longest_palindrome('aaaba'))

//question 65//
let firstDay = (new Date(year, month)).getDay();
console.log(firstDay)
const div = document.getElementById('#id')
console.log(div, 'div//////')

