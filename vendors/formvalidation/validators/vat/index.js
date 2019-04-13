import format from '../../utils/format';
import arVat from './arVat';
import atVat from './atVat';
import beVat from './beVat';
import bgVat from './bgVat';
import brVat from './brVat';
import chVat from './chVat';
import cyVat from './cyVat';
import czVat from './czVat';
import deVat from './deVat';
import dkVat from './dkVat';
import eeVat from './eeVat';
import esVat from './esVat';
import fiVat from './fiVat';
import frVat from './frVat';
import gbVat from './gbVat';
import grVat from './grVat';
import hrVat from './hrVat';
import huVat from './huVat';
import ieVat from './ieVat';
import isVat from './isVat';
import itVat from './itVat';
import ltVat from './ltVat';
import luVat from './luVat';
import lvVat from './lvVat';
import mtVat from './mtVat';
import nlVat from './nlVat';
import noVat from './noVat';
import plVat from './plVat';
import ptVat from './ptVat';
import roVat from './roVat';
import rsVat from './rsVat';
import ruVat from './ruVat';
import seVat from './seVat';
import siVat from './siVat';
import skVat from './skVat';
import veVat from './veVat';
import zaVat from './zaVat';
export default function vat() {
    const COUNTRY_CODES = [
        'AR', 'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR',
        'HU', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI',
        'VE', 'ZA',
    ];
    return {
        validate(input) {
            const value = input.value;
            if (value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, input.options);
            let country = value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            }
            else {
                country = opts.country;
            }
            if (COUNTRY_CODES.indexOf(country) === -1) {
                return { valid: true };
            }
            let result = {
                meta: {},
                valid: true,
            };
            switch (country.toLowerCase()) {
                case 'ar':
                    result.valid = arVat(value);
                    break;
                case 'at':
                    result.valid = atVat(value);
                    break;
                case 'be':
                    result.valid = beVat(value);
                    break;
                case 'bg':
                    result.valid = bgVat(value);
                    break;
                case 'br':
                    result.valid = brVat(value);
                    break;
                case 'ch':
                    result.valid = chVat(value);
                    break;
                case 'cy':
                    result.valid = cyVat(value);
                    break;
                case 'cz':
                    result.valid = czVat(value);
                    break;
                case 'de':
                    result.valid = deVat(value);
                    break;
                case 'dk':
                    result.valid = dkVat(value);
                    break;
                case 'ee':
                    result.valid = eeVat(value);
                    break;
                case 'el':
                    result.valid = grVat(value);
                    break;
                case 'es':
                    result = esVat(value);
                    break;
                case 'fi':
                    result.valid = fiVat(value);
                    break;
                case 'fr':
                    result.valid = frVat(value);
                    break;
                case 'gb':
                    result.valid = gbVat(value);
                    break;
                case 'gr':
                    result.valid = grVat(value);
                    break;
                case 'hr':
                    result.valid = hrVat(value);
                    break;
                case 'hu':
                    result.valid = huVat(value);
                    break;
                case 'ie':
                    result.valid = ieVat(value);
                    break;
                case 'is':
                    result.valid = isVat(value);
                    break;
                case 'it':
                    result.valid = itVat(value);
                    break;
                case 'lt':
                    result.valid = ltVat(value);
                    break;
                case 'lu':
                    result.valid = luVat(value);
                    break;
                case 'lv':
                    result.valid = lvVat(value);
                    break;
                case 'mt':
                    result.valid = mtVat(value);
                    break;
                case 'nl':
                    result.valid = nlVat(value);
                    break;
                case 'no':
                    result.valid = noVat(value);
                    break;
                case 'pl':
                    result.valid = plVat(value);
                    break;
                case 'pt':
                    result.valid = ptVat(value);
                    break;
                case 'ro':
                    result.valid = roVat(value);
                    break;
                case 'rs':
                    result.valid = rsVat(value);
                    break;
                case 'ru':
                    result.valid = ruVat(value);
                    break;
                case 'se':
                    result.valid = seVat(value);
                    break;
                case 'si':
                    result.valid = siVat(value);
                    break;
                case 'sk':
                    result.valid = skVat(value);
                    break;
                case 've':
                    result.valid = veVat(value);
                    break;
                case 'za':
                    result.valid = zaVat(value);
                    break;
                default: break;
            }
            const message = input.l10n
                ? format(opts.message || input.l10n.vat.country, input.l10n.vat.countries[country.toUpperCase()])
                : opts.message;
            return Object.assign({}, { message }, result);
        },
    };
}
