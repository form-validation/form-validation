function emitter() {
    return {
        fns: {},
        clear() {
            this.fns = {};
        },
        emit(event, ...args) {
            (this.fns[event] || []).map((handler) => handler.apply(handler, args));
        },
        off(event, func) {
            if (this.fns[event]) {
                const index = this.fns[event].indexOf(func);
                if (index >= 0) {
                    this.fns[event].splice(index, 1);
                }
            }
        },
        on(event, func) {
            (this.fns[event] = this.fns[event] || []).push(func);
        },
    };
}

function filter() {
    return {
        filters: {},
        add(name, func) {
            (this.filters[name] = this.filters[name] || []).push(func);
        },
        clear() {
            this.filters = {};
        },
        execute(name, defaultValue, args) {
            if (!this.filters[name] || !this.filters[name].length) {
                return defaultValue;
            }
            let result = defaultValue;
            const filters = this.filters[name];
            const count = filters.length;
            for (let i = 0; i < count; i++) {
                result = filters[i].apply(result, args);
            }
            return result;
        },
        remove(name, func) {
            if (this.filters[name]) {
                this.filters[name] = this.filters[name].filter((f) => f !== func);
            }
        },
    };
}

function getFieldValue(form, field, element, elements) {
    const type = (element.getAttribute('type') || '').toLowerCase();
    const tagName = element.tagName.toLowerCase();
    switch (tagName) {
        case 'textarea':
            return element.value;
        case 'select':
            const select = element;
            const index = select.selectedIndex;
            return (index >= 0) ? select.options.item(index).value : '';
        case 'input':
            if ('radio' === type || 'checkbox' === type) {
                const checked = elements.filter((ele) => ele.checked).length;
                return checked === 0 ? '' : checked + '';
            }
            else {
                return element.value;
            }
        default:
            return '';
    }
}

function format(message, parameters) {
    const params = Array.isArray(parameters) ? parameters : [parameters];
    let output = message;
    params.forEach((p) => {
        output = output.replace('%s', p);
    });
    return output;
}

function between() {
    const formatValue = (value) => {
        return parseFloat(`${value}`.replace(',', '.'));
    };
    return {
        validate(input) {
            const value = input.value;
            if (value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { inclusive: true }, input.options);
            const minValue = formatValue(opts.min);
            const maxValue = formatValue(opts.max);
            return opts.inclusive
                ? {
                    message: input.l10n
                        ? format(opts.message || input.l10n.between.default, [`${minValue}`, `${maxValue}`])
                        : opts.message,
                    valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
                }
                : {
                    message: input.l10n
                        ? format(opts.message || input.l10n.between.notInclusive, [`${minValue}`, `${maxValue}`])
                        : opts.message,
                    valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
                };
        },
    };
}

function blank() {
    return {
        validate(input) {
            return { valid: true };
        },
    };
}

function call(functionName, args) {
    if ('function' === typeof functionName) {
        return functionName.apply(this, args);
    }
    else if ('string' === typeof functionName) {
        let name = functionName;
        if ('()' === name.substring(name.length - 2)) {
            name = name.substring(0, name.length - 2);
        }
        const ns = name.split('.');
        const func = ns.pop();
        let context = window;
        for (const t of ns) {
            context = context[t];
        }
        return (typeof context[func] === 'undefined') ? null : context[func].apply(this, args);
    }
}

function callback() {
    return {
        validate(input) {
            const response = call(input.options.callback, [input]);
            return ('boolean' === typeof response)
                ? { valid: response }
                : response;
        },
    };
}

function choice() {
    return {
        validate(input) {
            const numChoices = ('select' === input.element.tagName.toLowerCase())
                ? input.element.querySelectorAll('option:checked').length
                : input.elements.filter((ele) => ele.checked).length;
            const min = input.options.min ? `${input.options.min}` : '';
            const max = input.options.max ? `${input.options.max}` : '';
            let msg = input.l10n ? (input.options.message || input.l10n.choice.default) : input.options.message;
            const isValid = !((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10)));
            switch (true) {
                case (!!min && !!max):
                    msg = format(input.l10n ? input.l10n.choice.between : input.options.message, [min, max]);
                    break;
                case (!!min):
                    msg = format(input.l10n ? input.l10n.choice.more : input.options.message, min);
                    break;
                case (!!max):
                    msg = format(input.l10n ? input.l10n.choice.less : input.options.message, max);
                    break;
                default:
                    break;
            }
            return {
                message: msg,
                valid: isValid,
            };
        },
    };
}

function luhn(value) {
    let length = value.length;
    const prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    let mul = 0;
    let sum = 0;
    while (length--) {
        sum += prodArr[mul][parseInt(value.charAt(length), 10)];
        mul = 1 - mul;
    }
    return (sum % 10 === 0 && sum > 0);
}

const CREDIT_CARD_TYPES = {
    AMERICAN_EXPRESS: {
        length: [15],
        prefix: ['34', '37'],
    },
    DANKORT: {
        length: [16],
        prefix: ['5019'],
    },
    DINERS_CLUB: {
        length: [14],
        prefix: ['300', '301', '302', '303', '304', '305', '36'],
    },
    DINERS_CLUB_US: {
        length: [16],
        prefix: ['54', '55'],
    },
    DISCOVER: {
        length: [16],
        prefix: [
            '6011', '622126', '622127', '622128', '622129', '62213',
            '62214', '62215', '62216', '62217', '62218', '62219',
            '6222', '6223', '6224', '6225', '6226', '6227', '6228',
            '62290', '62291', '622920', '622921', '622922', '622923',
            '622924', '622925', '644', '645', '646', '647', '648',
            '649', '65',
        ],
    },
    ELO: {
        length: [16],
        prefix: [
            '4011', '4312', '4389', '4514', '4573', '4576',
            '5041', '5066', '5067', '509',
            '6277', '6362', '6363', '650', '6516', '6550',
        ],
    },
    FORBRUGSFORENINGEN: {
        length: [16],
        prefix: ['600722'],
    },
    JCB: {
        length: [16],
        prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
    },
    LASER: {
        length: [16, 17, 18, 19],
        prefix: ['6304', '6706', '6771', '6709'],
    },
    MAESTRO: {
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766'],
    },
    MASTERCARD: {
        length: [16],
        prefix: ['51', '52', '53', '54', '55'],
    },
    SOLO: {
        length: [16, 18, 19],
        prefix: ['6334', '6767'],
    },
    UNIONPAY: {
        length: [16, 17, 18, 19],
        prefix: [
            '622126', '622127', '622128', '622129', '62213', '62214',
            '62215', '62216', '62217', '62218', '62219', '6222', '6223',
            '6224', '6225', '6226', '6227', '6228', '62290', '62291',
            '622920', '622921', '622922', '622923', '622924', '622925',
        ],
    },
    VISA: {
        length: [16],
        prefix: ['4'],
    },
    VISA_ELECTRON: {
        length: [16],
        prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
    },
};
function creditCard() {
    return {
        validate(input) {
            if (input.value === '') {
                return {
                    meta: {
                        type: null,
                    },
                    valid: true,
                };
            }
            if (/[^0-9-\s]+/.test(input.value)) {
                return {
                    meta: {
                        type: null,
                    },
                    valid: false,
                };
            }
            const v = input.value.replace(/\D/g, '');
            if (!luhn(v)) {
                return {
                    meta: {
                        type: null,
                    },
                    valid: false,
                };
            }
            for (const tpe of Object.keys(CREDIT_CARD_TYPES)) {
                for (const i in CREDIT_CARD_TYPES[tpe].prefix) {
                    if (input.value.substr(0, CREDIT_CARD_TYPES[tpe].prefix[i].length) ===
                        CREDIT_CARD_TYPES[tpe].prefix[i] && CREDIT_CARD_TYPES[tpe].length.indexOf(v.length) !== -1) {
                        return {
                            meta: {
                                type: tpe,
                            },
                            valid: true,
                        };
                    }
                }
            }
            return {
                meta: {
                    type: null,
                },
                valid: false,
            };
        },
    };
}

function isValidDate(year, month, day, notInFuture) {
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return false;
    }
    if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
        return false;
    }
    const numDays = [
        31,
        (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) ? 29 : 28,
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
    ];
    if (day <= 0 || day > numDays[month - 1]) {
        return false;
    }
    if (notInFuture === true) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        return (year < currentYear
            || (year === currentYear && month - 1 < currentMonth)
            || (year === currentYear && month - 1 === currentMonth && day < currentDay));
    }
    return true;
}

function date() {
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

function different() {
    return {
        validate(input) {
            const compareWith = ('function' === typeof input.options.compare)
                ? input.options.compare.call(this)
                : input.options.compare;
            return {
                valid: (compareWith === '' || input.value !== compareWith),
            };
        },
    };
}

function digits() {
    return {
        validate(input) {
            return { valid: (input.value === '') || /^\d+$/.test(input.value) };
        },
    };
}

function emailAddress() {
    const splitEmailAddresses = (emailAddresses, separator) => {
        const quotedFragments = emailAddresses.split(/"/);
        const quotedFragmentCount = quotedFragments.length;
        const emailAddressArray = [];
        let nextEmailAddress = '';
        for (let i = 0; i < quotedFragmentCount; i++) {
            if (i % 2 === 0) {
                const splitEmailAddressFragments = quotedFragments[i].split(separator);
                const splitEmailAddressFragmentCount = splitEmailAddressFragments.length;
                if (splitEmailAddressFragmentCount === 1) {
                    nextEmailAddress += splitEmailAddressFragments[0];
                }
                else {
                    emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);
                    for (let j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
                        emailAddressArray.push(splitEmailAddressFragments[j]);
                    }
                    nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
                }
            }
            else {
                nextEmailAddress += '"' + quotedFragments[i];
                if (i < quotedFragmentCount - 1) {
                    nextEmailAddress += '"';
                }
            }
        }
        emailAddressArray.push(nextEmailAddress);
        return emailAddressArray;
    };
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, {
                multiple: false,
                separator: /[,;]/,
            }, input.options);
            const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            const allowMultiple = opts.multiple === true || `${opts.multiple}` === 'true';
            if (allowMultiple) {
                const separator = opts.separator || /[,;]/;
                const addresses = splitEmailAddresses(input.value, separator);
                const length = addresses.length;
                for (let i = 0; i < length; i++) {
                    if (!emailRegExp.test(addresses[i])) {
                        return { valid: false };
                    }
                }
                return { valid: true };
            }
            else {
                return { valid: emailRegExp.test(input.value) };
            }
        },
    };
}

function file() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            let extension;
            const extensions = input.options.extension ? input.options.extension.toLowerCase().split(',') : null;
            const types = input.options.type ? input.options.type.toLowerCase().split(',') : null;
            const html5 = (window['File'] && window['FileList'] && window['FileReader']);
            if (html5) {
                const files = input.element.files;
                const total = files.length;
                let allSize = 0;
                if (input.options.maxFiles && total > parseInt(`${input.options.maxFiles}`, 10)) {
                    return {
                        meta: { error: 'INVALID_MAX_FILES' },
                        valid: false,
                    };
                }
                if (input.options.minFiles && total < parseInt(`${input.options.minFiles}`, 10)) {
                    return {
                        meta: { error: 'INVALID_MIN_FILES' },
                        valid: false,
                    };
                }
                let metaData = {};
                for (let i = 0; i < total; i++) {
                    allSize += files[i].size;
                    extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
                    metaData = {
                        ext: extension,
                        file: files[i],
                        size: files[i].size,
                        type: files[i].type,
                    };
                    if (input.options.minSize && files[i].size < parseInt(`${input.options.minSize}`, 10)) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, metaData),
                            valid: false,
                        };
                    }
                    if (input.options.maxSize && files[i].size > parseInt(`${input.options.maxSize}`, 10)) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, metaData),
                            valid: false,
                        };
                    }
                    if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, metaData),
                            valid: false,
                        };
                    }
                    if (files[i].type && types && types.indexOf(files[i].type.toLowerCase()) === -1) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_TYPE' }, metaData),
                            valid: false,
                        };
                    }
                }
                if (input.options.maxTotalSize && allSize > parseInt(`${input.options.maxTotalSize}`, 10)) {
                    return {
                        meta: Object.assign({}, {
                            error: 'INVALID_MAX_TOTAL_SIZE',
                            totalSize: allSize,
                        }, metaData),
                        valid: false,
                    };
                }
                if (input.options.minTotalSize && allSize < parseInt(`${input.options.minTotalSize}`, 10)) {
                    return {
                        meta: Object.assign({}, {
                            error: 'INVALID_MIN_TOTAL_SIZE',
                            totalSize: allSize,
                        }, metaData),
                        valid: false,
                    };
                }
            }
            else {
                extension = input.value.substr(input.value.lastIndexOf('.') + 1);
                if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
                    return {
                        meta: {
                            error: 'INVALID_EXTENSION',
                            ext: extension,
                        },
                        valid: false,
                    };
                }
            }
            return { valid: true };
        },
    };
}

function greaterThan() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { inclusive: true }, input.options);
            const minValue = parseFloat(`${opts.min}`.replace(',', '.'));
            return opts.inclusive
                ? {
                    message: input.l10n
                        ? format(opts.message || input.l10n.greaterThan.default, `${minValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) >= minValue,
                }
                : {
                    message: input.l10n
                        ? format(opts.message || input.l10n.greaterThan.notInclusive, `${minValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) > minValue,
                };
        },
    };
}

function identical() {
    return {
        validate(input) {
            const compareWith = ('function' === typeof input.options.compare)
                ? input.options.compare.call(this)
                : input.options.compare;
            return {
                valid: (compareWith === '' || input.value === compareWith),
            };
        },
    };
}

function integer() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, {
                decimalSeparator: '.',
                thousandsSeparator: '',
            }, input.options);
            const decimalSeparator = (opts.decimalSeparator === '.') ? '\\.' : opts.decimalSeparator;
            const thousandsSeparator = (opts.thousandsSeparator === '.') ? '\\.' : opts.thousandsSeparator;
            const testRegexp = new RegExp(`^-?[0-9]{1,3}(${thousandsSeparator}[0-9]{3})*(${decimalSeparator}[0-9]+)?$`);
            const thousandsReplacer = new RegExp(thousandsSeparator, 'g');
            let v = `${input.value}`;
            if (!testRegexp.test(v)) {
                return { valid: false };
            }
            if (thousandsSeparator) {
                v = v.replace(thousandsReplacer, '');
            }
            if (decimalSeparator) {
                v = v.replace(decimalSeparator, '.');
            }
            const n = parseFloat(v);
            return { valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n };
        },
    };
}

function ip() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, {
                ipv4: true,
                ipv6: true,
            }, input.options);
            const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
            const ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
            switch (true) {
                case (opts.ipv4 && !opts.ipv6):
                    return {
                        message: input.l10n ? (opts.message || input.l10n.ip.ipv4) : opts.message,
                        valid: ipv4Regex.test(input.value),
                    };
                case (!opts.ipv4 && opts.ipv6):
                    return {
                        message: input.l10n ? (opts.message || input.l10n.ip.ipv6) : opts.message,
                        valid: ipv6Regex.test(input.value),
                    };
                case (opts.ipv4 && opts.ipv6):
                default:
                    return {
                        message: input.l10n ? (opts.message || input.l10n.ip.default) : opts.message,
                        valid: ipv4Regex.test(input.value) || ipv6Regex.test(input.value),
                    };
            }
        },
    };
}

function lessThan() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { inclusive: true }, input.options);
            const maxValue = parseFloat(`${opts.max}`.replace(',', '.'));
            return opts.inclusive
                ? {
                    message: input.l10n
                        ? format(opts.message || input.l10n.lessThan.default, `${maxValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) <= maxValue,
                }
                : {
                    message: input.l10n
                        ? format(opts.message || input.l10n.lessThan.notInclusive, `${maxValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) < maxValue,
                };
        },
    };
}

function notEmpty() {
    return {
        validate(input) {
            return { valid: input.value !== '' };
        },
    };
}

function numeric() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, {
                decimalSeparator: '.',
                thousandsSeparator: '',
            }, input.options);
            let v = `${input.value}`;
            if (v.substr(0, 1) === opts.decimalSeparator) {
                v = `0${opts.decimalSeparator}${v.substr(1)}`;
            }
            else if (v.substr(0, 2) === `-${opts.decimalSeparator}`) {
                v = `-0${opts.decimalSeparator}${v.substr(2)}`;
            }
            const decimalSeparator = (opts.decimalSeparator === '.') ? '\\.' : opts.decimalSeparator;
            const thousandsSeparator = (opts.thousandsSeparator === '.') ? '\\.' : opts.thousandsSeparator;
            const testRegexp = new RegExp(`^-?[0-9]{1,3}(${thousandsSeparator}[0-9]{3})*(${decimalSeparator}[0-9]+)?$`);
            const thousandsReplacer = new RegExp(thousandsSeparator, 'g');
            if (!testRegexp.test(v)) {
                return { valid: false };
            }
            if (thousandsSeparator) {
                v = v.replace(thousandsReplacer, '');
            }
            if (decimalSeparator) {
                v = v.replace(decimalSeparator, '.');
            }
            const n = parseFloat(v);
            return { valid: !isNaN(n) && isFinite(n) };
        },
    };
}

function promise() {
    return {
        validate(input) {
            return call(input.options.promise, [input]);
        },
    };
}

function regexp() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const reg = input.options.regexp;
            if (reg instanceof RegExp) {
                return { valid: reg.test(input.value) };
            }
            else {
                const pattern = reg.toString();
                const exp = input.options.flags ? (new RegExp(pattern, input.options.flags)) : new RegExp(pattern);
                return { valid: exp.test(input.value) };
            }
        },
    };
}

function fetch(url, options) {
    const toQuery = (obj) => {
        return Object.keys(obj).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
    };
    return new Promise((resolve, reject) => {
        const opts = Object.assign({}, {
            crossDomain: false,
            headers: {},
            method: 'GET',
            params: {},
        }, options);
        const params = Object.keys(opts.params)
            .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(opts.params[k])}`)
            .join('&');
        const hasQuery = url.indexOf('?');
        const requestUrl = ('GET' === opts.method) ? `${url}${hasQuery ? '?' : '&'}${params}` : url;
        if (opts.crossDomain) {
            const script = document.createElement('script');
            const callback = `___fetch${Date.now()}___`;
            window[callback] = (data) => {
                delete window[callback];
                resolve(data);
            };
            script.src = `${requestUrl}${hasQuery ? '&' : '?'}callback=${callback}`;
            script.async = true;
            script.addEventListener('load', () => {
                script.parentNode.removeChild(script);
            });
            script.addEventListener('error', () => reject);
            document.head.appendChild(script);
        }
        else {
            const request = new XMLHttpRequest();
            request.open(opts.method, requestUrl);
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if ('POST' === opts.method) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            Object.keys(opts.headers).forEach((k) => request.setRequestHeader(k, opts.headers[k]));
            request.addEventListener('load', function () {
                resolve(JSON.parse(this.responseText));
            });
            request.addEventListener('error', () => reject);
            request.send(toQuery(opts.params));
        }
    });
}

function remote() {
    const DEFAULT_OPTIONS = {
        crossDomain: false,
        data: {},
        headers: {},
        method: 'GET',
        validKey: 'valid',
    };
    return {
        validate(input) {
            if (input.value === '') {
                return Promise.resolve({
                    valid: true,
                });
            }
            const opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
            let data = opts.data;
            if ('function' === typeof opts.data) {
                data = opts.data.call(this, input);
            }
            if ('string' === typeof data) {
                data = JSON.parse(data);
            }
            data[opts.name || input.field] = input.value;
            const url = ('function' === typeof opts.url)
                ? opts.url.call(this, input)
                : opts.url;
            return fetch(url, {
                crossDomain: opts.crossDomain,
                headers: opts.headers,
                method: opts.method,
                params: data,
            }).then((response) => {
                return Promise.resolve({
                    message: response.message,
                    meta: response,
                    valid: `${response[opts.validKey]}` === 'true',
                });
            }).catch((reason) => {
                return Promise.reject({
                    valid: false,
                });
            });
        },
    };
}

function stringCase() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { case: 'lower' }, input.options);
            const caseOpt = (opts.case || 'lower').toLowerCase();
            return {
                message: opts.message || (input.l10n
                    ? (('upper' === caseOpt) ? input.l10n.stringCase.upper : input.l10n.stringCase.default)
                    : opts.message),
                valid: ('upper' === caseOpt)
                    ? input.value === input.value.toUpperCase()
                    : input.value === input.value.toLowerCase(),
            };
        },
    };
}

function stringLength() {
    const utf8Length = (str) => {
        let s = str.length;
        for (let i = str.length - 1; i >= 0; i--) {
            const code = str.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff) {
                s++;
            }
            else if (code > 0x7ff && code <= 0xffff) {
                s += 2;
            }
            if (code >= 0xDC00 && code <= 0xDFFF) {
                i--;
            }
        }
        return `${s}`;
    };
    return {
        validate(input) {
            const opts = Object.assign({}, {
                trim: false,
                utf8Bytes: false,
            }, input.options);
            const v = (opts.trim === true || `${opts.trim}` === 'true') ? input.value.trim() : input.value;
            if (v === '') {
                return { valid: true };
            }
            const min = opts.min ? `${opts.min}` : '';
            const max = opts.max ? `${opts.max}` : '';
            const length = opts.utf8Bytes ? utf8Length(v) : v.length;
            let isValid = true;
            let msg = input.l10n ? (opts.message || input.l10n.stringLength.default) : opts.message;
            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                isValid = false;
            }
            switch (true) {
                case (!!min && !!max):
                    msg = input.l10n
                        ? format(opts.message || input.l10n.stringLength.between, [min, max])
                        : opts.message;
                    break;
                case (!!min):
                    msg = input.l10n
                        ? format(opts.message || input.l10n.stringLength.more, (parseInt(min, 10) - 1) + '')
                        : opts.message;
                    break;
                case (!!max):
                    msg = input.l10n
                        ? format(opts.message || input.l10n.stringLength.less, (parseInt(max, 10) + 1) + '')
                        : opts.message;
                    break;
                default:
                    break;
            }
            return {
                message: msg,
                valid: isValid,
            };
        },
    };
}

function uri() {
    const DEFAULT_OPTIONS = {
        allowEmptyProtocol: false,
        allowLocal: false,
        protocol: 'http, https, ftp',
    };
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
            const allowLocal = opts.allowLocal === true || `${opts.allowLocal}` === 'true';
            const allowEmptyProtocol = opts.allowEmptyProtocol === true || `${opts.allowEmptyProtocol}` === 'true';
            const protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
            const urlExp = new RegExp("^" +
                "(?:(?:" + protocol + ")://)" +
                (allowEmptyProtocol ? '?' : '') +
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                (allowLocal
                    ? ''
                    : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" +
                "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                (allowLocal ? '?' : '') +
                ")" +
                "(?::\\d{2,5})?" +
                "(?:/[^\\s]*)?$", "i");
            return { valid: urlExp.test(input.value) };
        },
    };
}

var validators = {
    between,
    blank,
    callback,
    choice,
    creditCard,
    date,
    different,
    digits,
    emailAddress,
    file,
    greaterThan,
    identical,
    integer,
    ip,
    lessThan,
    notEmpty,
    numeric,
    promise,
    regexp,
    remote,
    stringCase,
    stringLength,
    uri,
};

class Core {
    constructor(form, fields) {
        this.elements = {};
        this.ee = emitter();
        this.filter = filter();
        this.plugins = {};
        this.results = new Map();
        this.validators = {};
        this.form = form;
        this.fields = fields;
    }
    on(event, func) {
        this.ee.on(event, func);
        return this;
    }
    off(event, func) {
        this.ee.off(event, func);
        return this;
    }
    emit(event, ...args) {
        this.ee.emit(event, ...args);
        return this;
    }
    registerPlugin(name, plugin) {
        if (this.plugins[name]) {
            throw new Error(`The plguin ${name} is registered`);
        }
        plugin.setCore(this);
        plugin.install();
        this.plugins[name] = plugin;
        return this;
    }
    deregisterPlugin(name) {
        const plugin = this.plugins[name];
        if (plugin) {
            plugin.uninstall();
        }
        delete this.plugins[name];
        return this;
    }
    registerValidator(name, func) {
        if (this.validators[name]) {
            throw new Error(`The validator ${name} is registered`);
        }
        this.validators[name] = func;
        return this;
    }
    registerFilter(name, func) {
        this.filter.add(name, func);
        return this;
    }
    deregisterFilter(name, func) {
        this.filter.remove(name, func);
        return this;
    }
    executeFilter(name, defaultValue, args) {
        return this.filter.execute(name, defaultValue, args);
    }
    addField(field, options) {
        const opts = Object.assign({}, {
            selector: '',
            validators: {},
        }, options);
        this.fields[field] = this.fields[field]
            ? {
                selector: opts.selector || this.fields[field].selector,
                validators: Object.assign({}, this.fields[field].validators, opts.validators),
            }
            : opts;
        this.elements[field] = this.queryElements(field);
        this.emit('core.field.added', {
            elements: this.elements[field],
            field,
            options: this.fields[field],
        });
        return this;
    }
    removeField(field) {
        if (!this.fields[field]) {
            throw new Error(`The field ${field} validators are not defined. Please ensure the field is added first`);
        }
        const elements = this.elements[field];
        const options = this.fields[field];
        delete this.elements[field];
        delete this.fields[field];
        this.emit('core.field.removed', {
            elements,
            field,
            options,
        });
        return this;
    }
    validate() {
        this.emit('core.form.validating');
        return this.filter
            .execute('validate-pre', Promise.resolve(), [])
            .then(() => {
            return Promise
                .all(Object.keys(this.fields).map((field) => this.validateField(field)))
                .then((results) => {
                switch (true) {
                    case (results.indexOf('Invalid') !== -1):
                        this.emit('core.form.invalid');
                        return Promise.resolve('Invalid');
                    case (results.indexOf('NotValidated') !== -1):
                        this.emit('core.form.notvalidated');
                        return Promise.resolve('NotValidated');
                    default:
                        this.emit('core.form.valid');
                        return Promise.resolve('Valid');
                }
            });
        });
    }
    validateField(field) {
        const result = this.results.get(field);
        if (result === 'Valid' || result === 'Invalid') {
            return Promise.resolve(result);
        }
        this.emit('core.field.validating', field);
        const elements = this.elements[field];
        if (elements.length === 0) {
            this.emit('core.field.valid', field);
            return Promise.resolve('Valid');
        }
        const type = elements[0].getAttribute('type');
        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
            return this.validateElement(field, elements[0]);
        }
        else {
            return Promise.all(elements.map((ele) => this.validateElement(field, ele))).then((results) => {
                switch (true) {
                    case (results.indexOf('Invalid') !== -1):
                        this.emit('core.field.invalid', field);
                        this.results.set(field, 'Invalid');
                        return Promise.resolve('Invalid');
                    case (results.indexOf('NotValidated') !== -1):
                        this.emit('core.field.notvalidated', field);
                        this.results.delete(field);
                        return Promise.resolve('NotValidated');
                    default:
                        this.emit('core.field.valid', field);
                        this.results.set(field, 'Valid');
                        return Promise.resolve('Valid');
                }
            });
        }
    }
    validateElement(field, ele) {
        this.results.delete(field);
        const elements = this.elements[field];
        const ignored = this.filter.execute('element-ignored', false, [field, ele, elements]);
        if (ignored) {
            this.emit('core.element.ignored', {
                element: ele,
                elements,
                field,
            });
            return Promise.resolve('Ignored');
        }
        const validatorList = this.fields[field].validators;
        this.emit('core.element.validating', {
            element: ele,
            elements,
            field,
        });
        const promises = Object.keys(validatorList).map((v) => {
            return () => this.executeValidator(field, ele, v, validatorList[v]);
        });
        return this.waterfall(promises).then((results) => {
            const isValid = results.indexOf('Invalid') === -1;
            this.emit('core.element.validated', {
                element: ele,
                elements,
                field,
                valid: isValid,
            });
            const type = ele.getAttribute('type');
            if ('radio' === type || 'checkbox' === type || elements.length === 1) {
                this.emit(isValid ? 'core.field.valid' : 'core.field.invalid', field);
            }
            return Promise.resolve(isValid ? 'Valid' : 'Invalid');
        }).catch((reason) => {
            this.emit('core.element.notvalidated', {
                element: ele,
                elements,
                field,
            });
            return Promise.resolve(reason);
        });
    }
    executeValidator(field, ele, v, opts) {
        const elements = this.elements[field];
        const name = this.filter.execute('validator-name', v, [v, field]);
        opts.message = this.filter.execute('validator-message', opts.message, [this.locale, field, name]);
        if (!this.validators[name] || opts.enabled === false) {
            this.emit('core.validator.validated', {
                element: ele,
                elements,
                field,
                result: this.normalizeResult(field, name, { valid: true }),
                validator: name,
            });
            return Promise.resolve('Valid');
        }
        const validator = this.validators[name];
        const value = this.getElementValue(field, ele, name);
        const willValidate = this.filter.execute('field-should-validate', true, [field, ele, value, v]);
        if (!willValidate) {
            this.emit('core.validator.notvalidated', {
                element: ele,
                elements,
                field,
                validator: v,
            });
            return Promise.resolve('NotValidated');
        }
        this.emit('core.validator.validating', {
            element: ele,
            elements,
            field,
            validator: v,
        });
        const result = validator().validate({
            element: ele,
            elements,
            field,
            l10n: this.localization,
            options: opts,
            value,
        });
        const isPromise = ('function' === typeof result['then']);
        if (isPromise) {
            return result.then((r) => {
                const data = this.normalizeResult(field, v, r);
                this.emit('core.validator.validated', {
                    element: ele,
                    elements,
                    field,
                    result: data,
                    validator: v,
                });
                return data.valid ? 'Valid' : 'Invalid';
            });
        }
        else {
            const data = this.normalizeResult(field, v, result);
            this.emit('core.validator.validated', {
                element: ele,
                elements,
                field,
                result: data,
                validator: v,
            });
            return Promise.resolve(data.valid ? 'Valid' : 'Invalid');
        }
    }
    getElementValue(field, ele, validator) {
        const defaultValue = getFieldValue(this.form, field, ele, this.elements[field]);
        return this.filter.execute('field-value', defaultValue, [defaultValue, field, ele, validator]);
    }
    getElements(field) { return this.elements[field]; }
    getFields() { return this.fields; }
    getFormElement() { return this.form; }
    getPlugin(name) {
        return this.plugins[name];
    }
    updateFieldStatus(field, status, validator) {
        const elements = this.elements[field];
        const type = elements[0].getAttribute('type');
        const list = ('radio' === type || 'checkbox' === type) ? [elements[0]] : elements;
        list.forEach((ele) => this.updateElementStatus(field, ele, status, validator));
        if (!validator) {
            switch (status) {
                case 'NotValidated':
                    this.emit('core.field.notvalidated', field);
                    this.results.delete(field);
                    break;
                case 'Validating':
                    this.emit('core.field.validating', field);
                    this.results.delete(field);
                    break;
                case 'Valid':
                    this.emit('core.field.valid', field);
                    this.results.set(field, 'Valid');
                    break;
                case 'Invalid':
                    this.emit('core.field.invalid', field);
                    this.results.set(field, 'Invalid');
                    break;
            }
        }
        return this;
    }
    updateElementStatus(field, ele, status, validator) {
        const elements = this.elements[field];
        const fieldValidators = this.fields[field].validators;
        const validatorArr = validator ? [validator] : Object.keys(fieldValidators);
        switch (status) {
            case 'NotValidated':
                validatorArr.forEach((v) => this.emit('core.validator.notvalidated', {
                    element: ele,
                    elements,
                    field,
                    validator: v,
                }));
                this.emit('core.element.notvalidated', {
                    element: ele,
                    elements,
                    field,
                });
                break;
            case 'Validating':
                validatorArr.forEach((v) => this.emit('core.validator.validating', {
                    element: ele,
                    elements,
                    field,
                    validator: v,
                }));
                this.emit('core.element.validating', {
                    element: ele,
                    elements,
                    field,
                });
                break;
            case 'Valid':
                validatorArr.forEach((v) => this.emit('core.validator.validated', {
                    element: ele,
                    field,
                    result: {
                        message: fieldValidators[v].message,
                        valid: true,
                    },
                    validator: v,
                }));
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: true,
                });
                break;
            case 'Invalid':
                validatorArr.forEach((v) => this.emit('core.validator.validated', {
                    element: ele,
                    field,
                    result: {
                        message: fieldValidators[v].message,
                        valid: false,
                    },
                    validator: v,
                }));
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: false,
                });
                break;
        }
        return this;
    }
    resetForm(reset) {
        Object.keys(this.fields).forEach((field) => this.resetField(field, reset));
        this.emit('core.form.reset', {
            reset,
        });
        return this;
    }
    resetField(field, reset) {
        if (reset) {
            const elements = this.elements[field];
            const type = elements[0].getAttribute('type');
            elements.forEach((ele) => {
                if ('radio' === type || 'checkbox' === type) {
                    ele.removeAttribute('selected');
                    ele.removeAttribute('checked');
                    ele.checked = false;
                }
                else {
                    ele.setAttribute('value', '');
                    if (ele instanceof HTMLInputElement || ele instanceof HTMLTextAreaElement) {
                        ele.value = '';
                    }
                }
            });
        }
        this.updateFieldStatus(field, 'NotValidated');
        this.emit('core.field.reset', {
            field,
            reset,
        });
        return this;
    }
    revalidateField(field) {
        this.updateFieldStatus(field, 'NotValidated');
        return this.validateField(field);
    }
    disableValidator(field, validator) {
        return this.toggleValidator(false, field, validator);
    }
    enableValidator(field, validator) {
        return this.toggleValidator(true, field, validator);
    }
    updateValidatorOption(field, validator, name, value) {
        if (this.fields[field] && this.fields[field].validators && this.fields[field].validators[validator]) {
            this.fields[field].validators[validator][name] = value;
        }
        return this;
    }
    destroy() {
        Object.keys(this.plugins).forEach((id) => this.plugins[id].uninstall());
        this.ee.clear();
        this.filter.clear();
        this.results.clear();
        this.plugins = {};
        return this;
    }
    setLocale(locale, localization) {
        this.locale = locale;
        this.localization = localization;
        return this;
    }
    waterfall(promises) {
        return promises.reduce((p, c, i, a) => {
            return p.then((res) => {
                return c().then((result) => {
                    res.push(result);
                    return res;
                });
            });
        }, Promise.resolve([]));
    }
    queryElements(field) {
        const selector = (this.fields[field].selector)
            ? ('#' === this.fields[field].selector.charAt(0)
                ? `[id="${this.fields[field].selector.substring(1)}"]`
                : this.fields[field].selector)
            : `[name="${field}"]`;
        return [].slice.call(this.form.querySelectorAll(selector));
    }
    normalizeResult(field, validator, result) {
        const opts = this.fields[field].validators[validator];
        return Object.assign({}, result, {
            message: result.message
                || opts.message
                || (this.localization && this.localization[validator] && this.localization[validator].default
                    ? this.localization[validator].default : '')
                || `The field ${field} is not valid`,
        });
    }
    toggleValidator(enabled, field, validator) {
        const validatorArr = this.fields[field].validators;
        if (validator && validatorArr && validatorArr[validator]) {
            this.fields[field].validators[validator].enabled = enabled;
        }
        else if (!validator) {
            Object.keys(validatorArr).forEach((v) => this.fields[field].validators[v].enabled = enabled);
        }
        return this.updateFieldStatus(field, 'NotValidated', validator);
    }
}
function formValidation(form, options) {
    const opts = Object.assign({}, {
        fields: {},
        locale: 'en_US',
        plugins: {},
    }, options);
    const core = new Core(form, opts.fields);
    core.setLocale(opts.locale, opts.localization);
    Object.keys(opts.plugins).forEach((name) => core.registerPlugin(name, opts.plugins[name]));
    Object.keys(validators).forEach((name) => core.registerValidator(name, validators[name]));
    Object.keys(opts.fields).forEach((field) => core.addField(field, opts.fields[field]));
    return core;
}

class Plugin {
    constructor(opts) {
        this.opts = opts;
    }
    setCore(core) {
        this.core = core;
        return this;
    }
    install() { }
    uninstall() { }
}

export { Plugin as a, formValidation as b, format as c, luhn as d, isValidDate as e, creditCard as f, fetch as g, emailAddress as h, regexp as i, date as j };
