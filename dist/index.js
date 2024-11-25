"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToKhmerNumbers = convertToKhmerNumbers;
function convertToKhmerNumbers(input) {
    // Define a mapping of Arabic numerals to Khmer numerals
    var khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    // Convert the input to a string and replace each digit
    return input.toString().split('').map(function (digit) {
        var num = parseInt(digit, 10);
        return isNaN(num) ? digit : khmerDigits[num];
    }).join('');
}
