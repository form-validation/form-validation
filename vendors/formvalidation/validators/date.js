import format from '../utils/format';
import isValidDate from '../utils/isValidDate';
export default function date() {
    const parseDate = (input, inputFormat, separator) => {
        const yearIndex = inputFormat.indexOf('YYYY');
        const monthIndex = inputFormat.indexOf('MM');
        const dayIndex = inputFormat.indexOf('DD');
        if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
            return null;
        }
        const sections = input.split(' ');
        const dateSection = sections[0].split(separator);
        if (dateSection.length < 3) {
            return null;
        }
        const d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));
        if (sections.length > 1) {
            const timeSection = sections[1].split(':');
            d.setHours(timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0);
            d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
            d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
        }
        return d;
    };
    const formatDate = (input, inputFormat) => {
        const dateFormat = inputFormat
            .replace(/Y/g, 'y')
            .replace(/M/g, 'm')
            .replace(/D/g, 'd')
            .replace(/:m/g, ':M')
            .replace(/:mm/g, ':MM')
            .replace(/:S/, ':s')
            .replace(/:SS/, ':ss');
        const d = input.getDate();
        const dd = d < 10 ? `0${d}` : d;
        const m = input.getMonth() + 1;
        const mm = m < 10 ? `0${m}` : m;
        const yy = `${input.getFullYear()}`.substr(2);
        const yyyy = input.getFullYear();
        const h = input.getHours() % 12 || 12;
        const hh = h < 10 ? `0${h}` : h;
        const H = input.getHours();
        const HH = H < 10 ? `0${H}` : H;
        const M = input.getMinutes();
        const MM = M < 10 ? `0${M}` : M;
        const s = input.getSeconds();
        const ss = s < 10 ? `0${s}` : s;
        const replacer = {
            H: `${H}`,
            HH: `${HH}`,
            M: `${M}`,
            MM: `${MM}`,
            d: `${d}`,
            dd: `${dd}`,
            h: `${h}`,
            hh: `${hh}`,
            m: `${m}`,
            mm: `${mm}`,
            s: `${s}`,
            ss: `${ss}`,
            yy: `${yy}`,
            yyyy: `${yyyy}`,
        };
        return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, (match) => {
            return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
        });
    };
    return {
        validate(input) {
            if (input.value === '') {
                return {
                    meta: {
                        date: null,
                    },
                    valid: true,
                };
            }
            const opts = Object.assign({}, {
                format: (input.element && input.element.getAttribute('type') === 'date') ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
                message: '',
            }, input.options);
            const message = input.l10n ? input.l10n.date.default : opts.message;
            const invalidResult = {
                message: `${message}`,
                meta: {
                    date: null,
                },
                valid: false,
            };
            const formats = opts.format.split(' ');
            const timeFormat = (formats.length > 1) ? formats[1] : null;
            const amOrPm = (formats.length > 2) ? formats[2] : null;
            const sections = input.value.split(' ');
            const dateSection = sections[0];
            const timeSection = (sections.length > 1) ? sections[1] : null;
            if (formats.length !== sections.length) {
                return invalidResult;
            }
            const separator = opts.separator ||
                ((dateSection.indexOf('/') !== -1)
                    ? '/'
                    : ((dateSection.indexOf('-') !== -1) ? '-' : ((dateSection.indexOf('.') !== -1) ? '.' : '/')));
            if (separator === null || dateSection.indexOf(separator) === -1) {
                return invalidResult;
            }
            const dateStr = dateSection.split(separator);
            const dateFormat = formats[0].split(separator);
            if (dateStr.length !== dateFormat.length) {
                return invalidResult;
            }
            const yearStr = dateStr[dateFormat.indexOf('YYYY')];
            const monthStr = dateStr[dateFormat.indexOf('MM')];
            const dayStr = dateStr[dateFormat.indexOf('DD')];
            if (!/^\d+$/.test(yearStr) || !/^\d+$/.test(monthStr) || !/^\d+$/.test(dayStr)
                || yearStr.length > 4 || monthStr.length > 2 || dayStr.length > 2) {
                return invalidResult;
            }
            const year = parseInt(yearStr, 10);
            const month = parseInt(monthStr, 10);
            const day = parseInt(dayStr, 10);
            if (!isValidDate(year, month, day)) {
                return invalidResult;
            }
            const d = new Date(year, month - 1, day);
            if (timeFormat) {
                const hms = timeSection.split(':');
                if (timeFormat.split(':').length !== hms.length) {
                    return invalidResult;
                }
                const h = hms.length > 0 ? (hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1) : 0;
                const m = hms.length > 1 ? (hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1) : 0;
                const s = hms.length > 2 ? (hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1) : 0;
                if (h === -1 || m === -1 || s === -1) {
                    return invalidResult;
                }
                if (s < 0 || s > 60) {
                    return invalidResult;
                }
                if (h < 0 || h >= 24 || (amOrPm && h > 12)) {
                    return invalidResult;
                }
                if (m < 0 || m > 59) {
                    return invalidResult;
                }
                d.setHours(h);
                d.setMinutes(m);
                d.setSeconds(s);
            }
            const minOption = (typeof opts.min === 'function') ? opts.min() : opts.min;
            const min = (minOption instanceof Date)
                ? minOption
                : (minOption ? parseDate(minOption, dateFormat, separator) : d);
            const maxOption = (typeof opts.max === 'function') ? opts.max() : opts.max;
            const max = (maxOption instanceof Date)
                ? maxOption
                : (maxOption ? parseDate(maxOption, dateFormat, separator) : d);
            const minOptionStr = (minOption instanceof Date) ? formatDate(min, opts.format) : minOption;
            const maxOptionStr = (maxOption instanceof Date) ? formatDate(max, opts.format) : maxOption;
            switch (true) {
                case (!!minOptionStr && !maxOptionStr):
                    return {
                        message: format(input.l10n ? input.l10n.date.min : message, minOptionStr),
                        meta: {
                            date: d,
                        },
                        valid: d.getTime() >= min.getTime(),
                    };
                case (!!maxOptionStr && !minOptionStr):
                    return {
                        message: format(input.l10n ? input.l10n.date.max : message, maxOptionStr),
                        meta: {
                            date: d,
                        },
                        valid: d.getTime() <= max.getTime(),
                    };
                case (!!maxOptionStr && !!minOptionStr):
                    return {
                        message: format(input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
                        meta: {
                            date: d,
                        },
                        valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime(),
                    };
                default:
                    return {
                        message: `${message}`,
                        meta: {
                            date: d,
                        },
                        valid: true,
                    };
            }
        },
    };
}
