import format from '../../utils/format';
import arId from './arId';
import baId from './baId';
import bgId from './bgId';
import brId from './brId';
import chId from './chId';
import clId from './clId';
import cnId from './cnId';
import coId from './coId';
import czId from './czId';
import dkId from './dkId';
import esId from './esId';
import fiId from './fiId';
import frId from './frId';
import hkId from './hkId';
import hrId from './hrId';
import idId from './idId';
import ieId from './ieId';
import isId from './isId';
import krId from './krId';
import ltId from './ltId';
import lvId from './lvId';
import meId from './meId';
import mkId from './mkId';
import mxId from './mxId';
import myId from './myId';
import nlId from './nlId';
import noId from './noId';
import peId from './peId';
import plId from './plId';
import roId from './roId';
import rsId from './rsId';
import seId from './seId';
import siId from './siId';
import smId from './smId';
import thId from './thId';
import trId from './trId';
import twId from './twId';
import uyId from './uyId';
import zaId from './zaId';
export default function id() {
    const COUNTRY_CODES = [
        'AR', 'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CO', 'CZ', 'DK', 'EE', 'ES', 'FI', 'FR', 'HK', 'HR', 'ID', 'IE',
        'IS', 'KR', 'LT', 'LV', 'ME', 'MK', 'MX', 'MY', 'NL', 'NO', 'PE', 'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM',
        'TH', 'TR', 'TW', 'UY', 'ZA',
    ];
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, input.options);
            let country = input.value.substr(0, 2);
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
                    result.valid = arId(input.value);
                    break;
                case 'ba':
                    result.valid = baId(input.value);
                    break;
                case 'bg':
                    result.valid = bgId(input.value);
                    break;
                case 'br':
                    result.valid = brId(input.value);
                    break;
                case 'ch':
                    result.valid = chId(input.value);
                    break;
                case 'cl':
                    result.valid = clId(input.value);
                    break;
                case 'cn':
                    result.valid = cnId(input.value);
                    break;
                case 'co':
                    result.valid = coId(input.value);
                    break;
                case 'cz':
                    result.valid = czId(input.value);
                    break;
                case 'dk':
                    result.valid = dkId(input.value);
                    break;
                case 'ee':
                    result.valid = ltId(input.value);
                    break;
                case 'es':
                    result = esId(input.value);
                    break;
                case 'fi':
                    result.valid = fiId(input.value);
                    break;
                case 'fr':
                    result.valid = frId(input.value);
                    break;
                case 'hk':
                    result.valid = hkId(input.value);
                    break;
                case 'hr':
                    result.valid = hrId(input.value);
                    break;
                case 'id':
                    result.valid = idId(input.value);
                    break;
                case 'ie':
                    result.valid = ieId(input.value);
                    break;
                case 'is':
                    result.valid = isId(input.value);
                    break;
                case 'kr':
                    result.valid = krId(input.value);
                    break;
                case 'lt':
                    result.valid = ltId(input.value);
                    break;
                case 'lv':
                    result.valid = lvId(input.value);
                    break;
                case 'me':
                    result.valid = meId(input.value);
                    break;
                case 'mk':
                    result.valid = mkId(input.value);
                    break;
                case 'mx':
                    result.valid = mxId(input.value);
                    break;
                case 'my':
                    result.valid = myId(input.value);
                    break;
                case 'nl':
                    result.valid = nlId(input.value);
                    break;
                case 'no':
                    result.valid = noId(input.value);
                    break;
                case 'pe':
                    result.valid = peId(input.value);
                    break;
                case 'pl':
                    result.valid = plId(input.value);
                    break;
                case 'ro':
                    result.valid = roId(input.value);
                    break;
                case 'rs':
                    result.valid = rsId(input.value);
                    break;
                case 'se':
                    result.valid = seId(input.value);
                    break;
                case 'si':
                    result.valid = siId(input.value);
                    break;
                case 'sk':
                    result.valid = czId(input.value);
                    break;
                case 'sm':
                    result.valid = smId(input.value);
                    break;
                case 'th':
                    result.valid = thId(input.value);
                    break;
                case 'tr':
                    result.valid = trId(input.value);
                    break;
                case 'tw':
                    result.valid = twId(input.value);
                    break;
                case 'uy':
                    result.valid = uyId(input.value);
                    break;
                case 'za':
                    result.valid = zaId(input.value);
                    break;
                default: break;
            }
            const message = input.l10n
                ? format(opts.message || input.l10n.id.country, input.l10n.id.countries[country.toUpperCase()])
                : opts.message;
            return Object.assign({}, { message }, result);
        },
    };
}
