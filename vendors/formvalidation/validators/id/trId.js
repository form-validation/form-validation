export default function trId(value) {
    if (value.length !== 11) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10);
    }
    return (sum % 10) === parseInt(value.charAt(10), 10);
}
