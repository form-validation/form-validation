export default function arId(value) {
    const v = value.replace(/\./g, '');
    return /^\d{7,8}$/.test(v);
}
