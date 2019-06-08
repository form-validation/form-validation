import format from '../utils/format';
export default function step() {
    const round = (input, precision) => {
        const m = Math.pow(10, precision);
        const x = input * m;
        let sign;
        switch (true) {
            case (x === 0):
                sign = 0;
                break;
            case (x > 0):
                sign = 1;
                break;
            case (x < 0):
                sign = -1;
                break;
        }
        const isHalf = (x % 1 === 0.5 * sign);
        return isHalf ? (Math.floor(x) + (sign > 0 ? 1 : 0)) / m : Math.round(x) / m;
    };
    const floatMod = (x, y) => {
        if (y === 0.0) {
            return 1.0;
        }
        const dotX = `${x}`.split('.');
        const dotY = `${y}`.split('.');
        const precision = ((dotX.length === 1) ? 0 : dotX[1].length) + ((dotY.length === 1) ? 0 : dotY[1].length);
        return round(x - y * Math.floor(x / y), precision);
    };
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const v = parseFloat(input.value);
            if (isNaN(v) || !isFinite(v)) {
                return { valid: false };
            }
            const opts = Object.assign({}, {
                baseValue: 0,
                step: 1,
            }, input.options);
            const mod = floatMod(v - opts.baseValue, opts.step);
            return {
                message: input.l10n ? format(opts.message || input.l10n.step.default, `${opts.step}`) : opts.message,
                valid: mod === 0.0 || mod === opts.step,
            };
        },
    };
}
