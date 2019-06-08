export default function noId(value) {
    if (!/^\d{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const firstCd = (v) => {
        const weight = [3, 7, 6, 1, 8, 9, 4, 5, 2];
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += weight[i] * parseInt(v.charAt(i), 10);
        }
        return 11 - sum % 11;
    };
    const secondCd = (v) => {
        const weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += weight[i] * parseInt(v.charAt(i), 10);
        }
        return 11 - sum % 11;
    };
    return {
        meta: {},
        valid: `${firstCd(value)}` === value.substr(-2, 1) && `${secondCd(value)}` === value.substr(-1),
    };
}
