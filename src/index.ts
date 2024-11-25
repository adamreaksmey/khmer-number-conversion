export function convertToKhmerNumbers(input: number | string): string {
    // Define a mapping of Arabic numerals to Khmer numerals
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

    // Convert the input to a string and replace each digit
    return input.toString().split('').map(digit => {
        const num = parseInt(digit, 10);
        return isNaN(num) ? digit : khmerDigits[num];
    }).join('');
}
