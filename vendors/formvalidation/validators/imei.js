import luhn from '../algorithms/luhn';
export default function imei() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            switch (true) {
                case /^\d{15}$/.test(input.value):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(input.value):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(input.value):
                    const v = input.value.replace(/[^0-9]/g, '');
                    return { valid: luhn(v) };
                case /^\d{14}$/.test(input.value):
                case /^\d{16}$/.test(input.value):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(input.value):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(input.value):
                    return { valid: true };
                default:
                    return { valid: false };
            }
        },
    };
}
