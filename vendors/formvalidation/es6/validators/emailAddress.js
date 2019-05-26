export default function emailAddress() {
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
