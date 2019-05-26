export default function color() {
    const SUPPORTED_TYPES = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'];
    const KEYWORD_COLORS = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood',
        'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
        'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
        'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
        'dimgrey', 'dodgerblue',
        'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
        'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey',
        'honeydew', 'hotpink',
        'indianred', 'indigo', 'ivory',
        'khaki',
        'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
        'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
        'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
        'linen',
        'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
        'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
        'mistyrose', 'moccasin',
        'navajowhite', 'navy',
        'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
        'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink',
        'plum', 'powderblue', 'purple',
        'red', 'rosybrown', 'royalblue',
        'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue',
        'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
        'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise',
        'violet',
        'wheat', 'white', 'whitesmoke',
        'yellow', 'yellowgreen',
    ];
    const hex = (value) => {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    };
    const hsl = (value) => {
        return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
    };
    const hsla = (value) => {
        return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
    };
    const keyword = (value) => {
        return KEYWORD_COLORS.indexOf(value) >= 0;
    };
    const rgb = (value) => {
        return /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(value)
            || /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
    };
    const rgba = (value) => {
        return /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value)
            || /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
    };
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const types = (typeof input.options.type === 'string')
                ? input.options.type.toString().replace(/s/g, '').split(',')
                : (input.options.type || SUPPORTED_TYPES);
            for (const type of types) {
                const tpe = type.toLowerCase();
                if (SUPPORTED_TYPES.indexOf(tpe) === -1) {
                    continue;
                }
                let result = true;
                switch (tpe) {
                    case 'hex':
                        result = hex(input.value);
                        break;
                    case 'hsl':
                        result = hsl(input.value);
                        break;
                    case 'hsla':
                        result = hsla(input.value);
                        break;
                    case 'keyword':
                        result = keyword(input.value);
                        break;
                    case 'rgb':
                        result = rgb(input.value);
                        break;
                    case 'rgba':
                        result = rgba(input.value);
                        break;
                }
                if (result) {
                    return { valid: true };
                }
            }
            return { valid: false };
        },
    };
}
