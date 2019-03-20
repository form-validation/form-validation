export default function mod37And36(value, alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    const length = value.length;
    const modulus = alphabet.length;
    let check = Math.floor(modulus / 2);
    for (let i = 0; i < length; i++) {
        check = (((check || modulus) * 2) % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
    }
    return (check === 1);
}
