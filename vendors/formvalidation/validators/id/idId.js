import verhoeff from '../../algorithms/verhoeff';
export default function idId(value) {
    if (!/^[2-9]\d{11}$/.test(value)) {
        return false;
    }
    const converted = value.split("").map((item) => parseInt(item, 10));
    return verhoeff(converted);
}
