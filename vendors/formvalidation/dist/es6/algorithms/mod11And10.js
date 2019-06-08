export default function mod11And10(value) {
    const length = value.length;
    let check = 5;
    for (let i = 0; i < length; i++) {
        check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
    }
    return (check === 1);
}
