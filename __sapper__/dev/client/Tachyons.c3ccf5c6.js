import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, C as listen, o as insert, p as append, L as run_all } from './chunk.989912da.js';
import { a as Plugin, b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as en_US } from './chunk.743a4296.js';

class L10n extends Plugin {
    constructor(opts) {
        super(opts);
        this.messageFilter = this.getMessage.bind(this);
    }
    install() {
        this.core.registerFilter('validator-message', this.messageFilter);
    }
    uninstall() {
        this.core.deregisterFilter('validator-message', this.messageFilter);
    }
    getMessage(locale, field, validator) {
        if (this.opts[field] && this.opts[field][validator]) {
            const message = this.opts[field][validator];
            const messageType = typeof message;
            if ('object' === messageType && message[locale]) {
                return message[locale];
            }
            else if ('function' === messageType) {
                const result = message.apply(this, [field, validator]);
                return (result && result[locale]) ? result[locale] : '';
            }
        }
        return '';
    }
}

var vi_VN = {
    base64: {
        default: 'Vui lòng nhập chuỗi mã hoá base64 hợp lệ',
    },
    between: {
        default: 'Vui lòng nhập giá trị nằm giữa %s và %s',
        notInclusive: 'Vui lòng nhập giá trị nằm giữa %s và %s',
    },
    bic: {
        default: 'Vui lòng nhập số BIC hợp lệ',
    },
    callback: {
        default: 'Vui lòng nhập giá trị hợp lệ',
    },
    choice: {
        between: 'Vui lòng chọn %s - %s lựa chọn',
        default: 'Vui lòng nhập giá trị hợp lệ',
        less: 'Vui lòng chọn ít nhất %s lựa chọn',
        more: 'Vui lòng chọn nhiều nhất %s lựa chọn',
    },
    color: {
        default: 'Vui lòng nhập mã màu hợp lệ',
    },
    creditCard: {
        default: 'Vui lòng nhập số thẻ tín dụng hợp lệ',
    },
    cusip: {
        default: 'Vui lòng nhập số CUSIP hợp lệ',
    },
    date: {
        default: 'Vui lòng nhập ngày hợp lệ',
        max: 'Vui lòng nhập ngày trước %s',
        min: 'Vui lòng nhập ngày sau %s',
        range: 'Vui lòng nhập ngày trong khoảng %s - %s',
    },
    different: {
        default: 'Vui lòng nhập một giá trị khác',
    },
    digits: {
        default: 'Vui lòng chỉ nhập số',
    },
    ean: {
        default: 'Vui lòng nhập số EAN hợp lệ',
    },
    ein: {
        default: 'Vui lòng nhập số EIN hợp lệ',
    },
    emailAddress: {
        default: 'Vui lòng nhập địa chỉ email hợp lệ',
    },
    file: {
        default: 'Vui lòng chọn file hợp lệ',
    },
    greaterThan: {
        default: 'Vui lòng nhập giá trị lớn hơn hoặc bằng %s',
        notInclusive: 'Vui lòng nhập giá trị lớn hơn %s',
    },
    grid: {
        default: 'Vui lòng nhập số GRId hợp lệ',
    },
    hex: {
        default: 'Vui lòng nhập số hexa hợp lệ',
    },
    iban: {
        countries: {
            AD: 'Andorra',
            AE: 'Tiểu vương quốc Ả Rập thống nhất',
            AL: 'Albania',
            AO: 'Angola',
            AT: 'Áo',
            AZ: 'Azerbaijan',
            BA: 'Bosnia và Herzegovina',
            BE: 'Bỉ',
            BF: 'Burkina Faso',
            BG: 'Bulgaria',
            BH: 'Bahrain',
            BI: 'Burundi',
            BJ: 'Benin',
            BR: 'Brazil',
            CH: 'Thuỵ Sĩ',
            CI: 'Bờ Biển Ngà',
            CM: 'Cameroon',
            CR: 'Costa Rica',
            CV: 'Cape Verde',
            CY: 'Síp',
            CZ: 'Séc',
            DE: 'Đức',
            DK: 'Đan Mạch',
            DO: 'Dominican',
            DZ: 'Algeria',
            EE: 'Estonia',
            ES: 'Tây Ban Nha',
            FI: 'Phần Lan',
            FO: 'Đảo Faroe',
            FR: 'Pháp',
            GB: 'Vương quốc Anh',
            GE: 'Georgia',
            GI: 'Gibraltar',
            GL: 'Greenland',
            GR: 'Hy Lạp',
            GT: 'Guatemala',
            HR: 'Croatia',
            HU: 'Hungary',
            IE: 'Ireland',
            IL: 'Israel',
            IR: 'Iran',
            IS: 'Iceland',
            IT: 'Ý',
            JO: 'Jordan',
            KW: 'Kuwait',
            KZ: 'Kazakhstan',
            LB: 'Lebanon',
            LI: 'Liechtenstein',
            LT: 'Lithuania',
            LU: 'Luxembourg',
            LV: 'Latvia',
            MC: 'Monaco',
            MD: 'Moldova',
            ME: 'Montenegro',
            MG: 'Madagascar',
            MK: 'Macedonia',
            ML: 'Mali',
            MR: 'Mauritania',
            MT: 'Malta',
            MU: 'Mauritius',
            MZ: 'Mozambique',
            NL: 'Hà Lan',
            NO: 'Na Uy',
            PK: 'Pakistan',
            PL: 'Ba Lan',
            PS: 'Palestine',
            PT: 'Bồ Đào Nha',
            QA: 'Qatar',
            RO: 'Romania',
            RS: 'Serbia',
            SA: 'Ả Rập Xê Út',
            SE: 'Thuỵ Điển',
            SI: 'Slovenia',
            SK: 'Slovakia',
            SM: 'San Marino',
            SN: 'Senegal',
            TL: 'Đông Timor',
            TN: 'Tunisia',
            TR: 'Thổ Nhĩ Kỳ',
            VG: 'Đảo Virgin, Anh quốc',
            XK: 'Kosovo',
        },
        country: 'Vui lòng nhập mã IBAN hợp lệ của %s',
        default: 'Vui lòng nhập số IBAN hợp lệ',
    },
    id: {
        countries: {
            BA: 'Bosnia và Herzegovina',
            BG: 'Bulgaria',
            BR: 'Brazil',
            CH: 'Thuỵ Sĩ',
            CL: 'Chi Lê',
            CN: 'Trung Quốc',
            CZ: 'Séc',
            DK: 'Đan Mạch',
            EE: 'Estonia',
            ES: 'Tây Ban Nha',
            FI: 'Phần Lan',
            HR: 'Croatia',
            IE: 'Ireland',
            IS: 'Iceland',
            LT: 'Lithuania',
            LV: 'Latvia',
            ME: 'Montenegro',
            MK: 'Macedonia',
            NL: 'Hà Lan',
            PL: 'Ba Lan',
            RO: 'Romania',
            RS: 'Serbia',
            SE: 'Thuỵ Điển',
            SI: 'Slovenia',
            SK: 'Slovakia',
            SM: 'San Marino',
            TH: 'Thái Lan',
            TR: 'Thổ Nhĩ Kỳ',
            ZA: 'Nam Phi',
        },
        country: 'Vui lòng nhập mã ID hợp lệ của %s',
        default: 'Vui lòng nhập mã ID hợp lệ',
    },
    identical: {
        default: 'Vui lòng nhập cùng giá trị',
    },
    imei: {
        default: 'Vui lòng nhập số IMEI hợp lệ',
    },
    imo: {
        default: 'Vui lòng nhập số IMO hợp lệ',
    },
    integer: {
        default: 'Vui lòng nhập số hợp lệ',
    },
    ip: {
        default: 'Vui lòng nhập địa chỉ IP hợp lệ',
        ipv4: 'Vui lòng nhập địa chỉ IPv4 hợp lệ',
        ipv6: 'Vui lòng nhập địa chỉ IPv6 hợp lệ',
    },
    isbn: {
        default: 'Vui lòng nhập số ISBN hợp lệ',
    },
    isin: {
        default: 'Vui lòng nhập số ISIN hợp lệ',
    },
    ismn: {
        default: 'Vui lòng nhập số ISMN hợp lệ',
    },
    issn: {
        default: 'Vui lòng nhập số ISSN hợp lệ',
    },
    lessThan: {
        default: 'Vui lòng nhập giá trị nhỏ hơn hoặc bằng %s',
        notInclusive: 'Vui lòng nhập giá trị nhỏ hơn %s',
    },
    mac: {
        default: 'Vui lòng nhập địa chỉ MAC hợp lệ',
    },
    meid: {
        default: 'Vui lòng nhập số MEID hợp lệ',
    },
    notEmpty: {
        default: 'Vui lòng nhập giá trị',
    },
    numeric: {
        default: 'Vui lòng nhập số hợp lệ',
    },
    phone: {
        countries: {
            AE: 'Tiểu vương quốc Ả Rập thống nhất',
            BG: 'Bulgaria',
            BR: 'Brazil',
            CN: 'Trung Quốc',
            CZ: 'Séc',
            DE: 'Đức',
            DK: 'Đan Mạch',
            ES: 'Tây Ban Nha',
            FR: 'Pháp',
            GB: 'Vương quốc Anh',
            IN: 'Ấn Độ',
            MA: 'Maroc',
            NL: 'Hà Lan',
            PK: 'Pakistan',
            RO: 'Romania',
            RU: 'Nga',
            SK: 'Slovakia',
            TH: 'Thái Lan',
            US: 'Mỹ',
            VE: 'Venezuela',
        },
        country: 'Vui lòng nhập số điện thoại hợp lệ của %s',
        default: 'Vui lòng nhập số điện thoại hợp lệ',
    },
    promise: {
        default: 'Vui lòng nhập giá trị hợp lệ',
    },
    regexp: {
        default: 'Vui lòng nhập giá trị thích hợp với biểu mẫu',
    },
    remote: {
        default: 'Vui lòng nhập giá trị hợp lệ',
    },
    rtn: {
        default: 'Vui lòng nhập số RTN hợp lệ',
    },
    sedol: {
        default: 'Vui lòng nhập số SEDOL hợp lệ',
    },
    siren: {
        default: 'Vui lòng nhập số Siren hợp lệ',
    },
    siret: {
        default: 'Vui lòng nhập số Siret hợp lệ',
    },
    step: {
        default: 'Vui lòng nhập bước nhảy của %s',
    },
    stringCase: {
        default: 'Vui lòng nhập ký tự thường',
        upper: 'Vui lòng nhập ký tự in hoa',
    },
    stringLength: {
        between: 'Vui lòng nhập giá trị có độ dài trong khoảng %s và %s ký tự',
        default: 'Vui lòng nhập giá trị có độ dài hợp lệ',
        less: 'Vui lòng nhập ít hơn %s ký tự',
        more: 'Vui lòng nhập nhiều hơn %s ký tự',
    },
    uri: {
        default: 'Vui lòng nhập địa chỉ URI hợp lệ',
    },
    uuid: {
        default: 'Vui lòng nhập số UUID hợp lệ',
        version: 'Vui lòng nhập số UUID phiên bản %s hợp lệ',
    },
    vat: {
        countries: {
            AT: 'Áo',
            BE: 'Bỉ',
            BG: 'Bulgaria',
            BR: 'Brazil',
            CH: 'Thuỵ Sĩ',
            CY: 'Síp',
            CZ: 'Séc',
            DE: 'Đức',
            DK: 'Đan Mạch',
            EE: 'Estonia',
            EL: 'Hy Lạp',
            ES: 'Tây Ban Nha',
            FI: 'Phần Lan',
            FR: 'Pháp',
            GB: 'Vương quốc Anh',
            GR: 'Hy Lạp',
            HR: 'Croatia',
            HU: 'Hungari',
            IE: 'Ireland',
            IS: 'Iceland',
            IT: 'Ý',
            LT: 'Lithuania',
            LU: 'Luxembourg',
            LV: 'Latvia',
            MT: 'Malta',
            NL: 'Hà Lan',
            NO: 'Na Uy',
            PL: 'Ba Lan',
            PT: 'Bồ Đào Nha',
            RO: 'Romania',
            RS: 'Serbia',
            RU: 'Nga',
            SE: 'Thuỵ Điển',
            SI: 'Slovenia',
            SK: 'Slovakia',
            VE: 'Venezuela',
            ZA: 'Nam Phi',
        },
        country: 'Vui lòng nhập số VAT hợp lệ của %s',
        default: 'Vui lòng nhập số VAT hợp lệ',
    },
    vin: {
        default: 'Vui lòng nhập số VIN hợp lệ',
    },
    zipCode: {
        countries: {
            AT: 'Áo',
            BG: 'Bulgaria',
            BR: 'Brazil',
            CA: 'Canada',
            CH: 'Thuỵ Sĩ',
            CZ: 'Séc',
            DE: 'Đức',
            DK: 'Đan Mạch',
            ES: 'Tây Ban Nha',
            FR: 'Pháp',
            GB: 'Vương quốc Anh',
            IE: 'Ireland',
            IN: 'Ấn Độ',
            IT: 'Ý',
            MA: 'Maroc',
            NL: 'Hà Lan',
            PL: 'Ba Lan',
            PT: 'Bồ Đào Nha',
            RO: 'Romania',
            RU: 'Nga',
            SE: 'Thuỵ Sĩ',
            SG: 'Singapore',
            SK: 'Slovakia',
            US: 'Mỹ',
        },
        country: 'Vui lòng nhập mã bưu điện hợp lệ của %s',
        default: 'Vui lòng nhập mã bưu điện hợp lệ',
    },
};

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="mb2 pa2">
        Choose language
        <button type="button" class="ba b--black-20 ph3 pv2 br2 setLocaleButton" data-locale="en_US">English</button>
        <button type="button" class="ba b--black-20 ph3 pv2 br2 setLocaleButton" data-locale="vi_VN">Tiếng Việt</button>
    </div>

    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-50">
                    <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email</div>
                <div class="fl w-50">
                    <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Gender</div>
                <div class="fl w-50">
                    <label for="genderMale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderMale" value="male" /> Male</label>
                    <label for="genderFemale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderFemale" value="female" /> Female</label>
                    <label for="genderOther" class="lh-copy"><input class="mr2" type="radio" name="gender" id="genderOther" value="other" /> Other</label>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Date of birth</div>
                <div class="fl w-50">
                    <input type="text" name="birthday" placeholder="YYYY/MM/DD" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/L10n.min.js"></script-tag>

<script-tag src="/vendors/formvalidation/dist/js/locales/en_US.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/locales/vi_VN.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            // Set the default locale
            locale: 'en_US',
            localization: FormValidation.locales.en_US,
            fields: {
                // Since the messages of notEmpty, stringLength, regexp are not set here,
                // they will be taken from language package
                username: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/
                        },
                    }
                },
                // Messages are taken from language package
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                // Messages of notEmpty and stringLength validators
                // are taken from language package
                password: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        },
                        different: {
                            compare: function() {
                                return form.querySelector('[name="username"]').value;
                            },
                        }
                    }
                },
                birthday: {
                    validators: {
                        notEmpty: {
                        },
                        date: {
                            format: 'YYYY/MM/DD'
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                l10n: new FormValidation.plugins.L10n({
                    username: {
                        stringLength: {
                            // Method 2: Use a literal object to define messages
                            en_US: 'The username must be between %s and %s characters long',
                            vi_VN: 'Tên đăng nhập phải có ít nhất %s và nhiều nhất %s ký tự',
                        },
                    },
                    password: {
                        // Method 3: Use a callback to determine message in particular language
                        different: function(field, validator) {
                            return {
                                en_US: 'The password can not be same as username',
                                vi_VN: 'Mật khẩu phải khác tên đăng nhập',
                            };
                        },
                    },
                }),
            },
        }
    );

    // Switch locale
    const localeButtons = Array.from(document.querySelectorAll('.setLocaleButton'));
    localeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const locale = btn.getAttribute('data-locale');
            fv.setLocale(locale, FormValidation.locales[locale])
              .resetForm();
        });
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/l10n/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/l10n/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var div0, t0, button0, t1, button0_class_value, t2, button1, t3, button1_class_value, t4, form, div4, div3, div1, t5, t6, div2, input0, t7, div8, div7, div5, t8, t9, div6, input1, t10, div12, div11, div9, t11, t12, div10, input2, t13, div16, div15, div13, t14, t15, div14, label0, input3, t16, t17, label1, input4, t18, t19, label2, input5, t20, t21, div20, div19, div17, t22, t23, div18, input6, t24, div24, div23, div21, t25, div22, button2, t26, dispose;

	return {
		c: function create() {
			div0 = element("div");
			t0 = text("Choose language ");
			button0 = element("button");
			t1 = text("English");
			t2 = space();
			button1 = element("button");
			t3 = text("Tiếng Việt");
			t4 = space();
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			div1 = element("div");
			t5 = text("Username");
			t6 = space();
			div2 = element("div");
			input0 = element("input");
			t7 = space();
			div8 = element("div");
			div7 = element("div");
			div5 = element("div");
			t8 = text("Email");
			t9 = space();
			div6 = element("div");
			input1 = element("input");
			t10 = space();
			div12 = element("div");
			div11 = element("div");
			div9 = element("div");
			t11 = text("Password");
			t12 = space();
			div10 = element("div");
			input2 = element("input");
			t13 = space();
			div16 = element("div");
			div15 = element("div");
			div13 = element("div");
			t14 = text("Gender");
			t15 = space();
			div14 = element("div");
			label0 = element("label");
			input3 = element("input");
			t16 = text(" Male");
			t17 = space();
			label1 = element("label");
			input4 = element("input");
			t18 = text(" Female");
			t19 = space();
			label2 = element("label");
			input5 = element("input");
			t20 = text(" Other");
			t21 = space();
			div20 = element("div");
			div19 = element("div");
			div17 = element("div");
			t22 = text("Date of birth");
			t23 = space();
			div18 = element("div");
			input6 = element("input");
			t24 = space();
			div24 = element("div");
			div23 = element("div");
			div21 = element("div");
			t25 = space();
			div22 = element("div");
			button2 = element("button");
			t26 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Choose language ");

			button0 = claim_element(div0_nodes, "BUTTON", { type: true, class: true }, false);
			var button0_nodes = children(button0);

			t1 = claim_text(button0_nodes, "English");
			button0_nodes.forEach(detach);
			t2 = claim_text(div0_nodes, " ");

			button1 = claim_element(div0_nodes, "BUTTON", { type: true, class: true }, false);
			var button1_nodes = children(button1);

			t3 = claim_text(button1_nodes, "Tiếng Việt");
			button1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n    ");

			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			t5 = claim_text(div1_nodes, "Username");
			div1_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input0 = claim_element(div2_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div5 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			t8 = claim_text(div5_nodes, "Email");
			div5_nodes.forEach(detach);
			t9 = claim_text(div7_nodes, "\n                ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input1 = claim_element(div6_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t10 = claim_text(form_nodes, "\n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div9 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			t11 = claim_text(div9_nodes, "Password");
			div9_nodes.forEach(detach);
			t12 = claim_text(div11_nodes, "\n                ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			input2 = claim_element(div10_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t13 = claim_text(form_nodes, "\n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div13 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			t14 = claim_text(div13_nodes, "Gender");
			div13_nodes.forEach(detach);
			t15 = claim_text(div15_nodes, "\n                ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label0 = claim_element(div14_nodes, "LABEL", { for: true, class: true }, false);
			var label0_nodes = children(label0);

			input3 = claim_element(label0_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t16 = claim_text(label0_nodes, " Male");
			label0_nodes.forEach(detach);
			t17 = claim_text(div14_nodes, "\n                    ");

			label1 = claim_element(div14_nodes, "LABEL", { for: true, class: true }, false);
			var label1_nodes = children(label1);

			input4 = claim_element(label1_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t18 = claim_text(label1_nodes, " Female");
			label1_nodes.forEach(detach);
			t19 = claim_text(div14_nodes, "\n                    ");

			label2 = claim_element(div14_nodes, "LABEL", { for: true, class: true }, false);
			var label2_nodes = children(label2);

			input5 = claim_element(label2_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t20 = claim_text(label2_nodes, " Other");
			label2_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div17 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			t22 = claim_text(div17_nodes, "Date of birth");
			div17_nodes.forEach(detach);
			t23 = claim_text(div19_nodes, "\n                ");

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			input6 = claim_element(div18_nodes, "INPUT", { type: true, name: true, placeholder: true, class: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n        ");

			div24 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div21 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div21_nodes.forEach(detach);
			t25 = claim_text(div23_nodes, "\n                ");

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			button2 = claim_element(div22_nodes, "BUTTON", { type: true, class: true }, false);
			var button2_nodes = children(button2);

			t26 = claim_text(button2_nodes, "Submit");
			button2_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			button0.type = "button";
			button0.className = button0_class_value = "ba b--black-20 ph3 pv2 br2 " + (ctx._locale === 'en_US' ? 'bg-blue white' : '');
			add_location(button0, file, 2, 24, 67);
			button1.type = "button";
			button1.className = button1_class_value = "ba b--black-20 ph3 pv2 br2 " + (ctx._locale === 'vi_VN' ? 'bg-blue white' : '');
			add_location(button1, file, 2, 174, 217);
			div0.className = "mb2 pa2";
			add_location(div0, file, 1, 4, 21);
			div1.className = "fl w-25 pa2";
			add_location(div1, file, 8, 16, 504);
			attr(input0, "type", "text");
			input0.name = "username";
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input0, file, 10, 20, 602);
			div2.className = "fl w-50";
			add_location(div2, file, 9, 16, 560);
			div3.className = "fl w-100";
			add_location(div3, file, 7, 12, 465);
			div4.className = "cf mb2";
			add_location(div4, file, 6, 8, 432);
			div5.className = "fl w-25 pa2";
			add_location(div5, file, 16, 16, 829);
			attr(input1, "type", "text");
			input1.name = "email";
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input1, file, 18, 20, 924);
			div6.className = "fl w-50";
			add_location(div6, file, 17, 16, 882);
			div7.className = "fl w-100";
			add_location(div7, file, 15, 12, 790);
			div8.className = "cf mb2";
			add_location(div8, file, 14, 8, 757);
			div9.className = "fl w-25 pa2";
			add_location(div9, file, 24, 16, 1148);
			attr(input2, "type", "password");
			input2.name = "password";
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input2, file, 26, 20, 1246);
			div10.className = "fl w-50";
			add_location(div10, file, 25, 16, 1204);
			div11.className = "fl w-100";
			add_location(div11, file, 23, 12, 1109);
			div12.className = "cf mb2";
			add_location(div12, file, 22, 8, 1076);
			div13.className = "fl w-25 pa2";
			add_location(div13, file, 32, 16, 1477);
			input3.className = "mr2";
			attr(input3, "type", "radio");
			input3.name = "gender";
			input3.id = "genderMale";
			input3.value = "male";
			add_location(input3, file, 34, 64, 1617);
			label0.htmlFor = "genderMale";
			label0.className = "lh-copy mr4";
			add_location(label0, file, 34, 20, 1573);
			input4.className = "mr2";
			attr(input4, "type", "radio");
			input4.name = "gender";
			input4.id = "genderFemale";
			input4.value = "female";
			add_location(input4, file, 35, 66, 1774);
			label1.htmlFor = "genderFemale";
			label1.className = "lh-copy mr4";
			add_location(label1, file, 35, 20, 1728);
			input5.className = "mr2";
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.id = "genderOther";
			input5.value = "other";
			add_location(input5, file, 36, 61, 1932);
			label2.htmlFor = "genderOther";
			label2.className = "lh-copy";
			add_location(label2, file, 36, 20, 1891);
			div14.className = "fl w-50";
			add_location(div14, file, 33, 16, 1531);
			div15.className = "fl w-100";
			add_location(div15, file, 31, 12, 1438);
			div16.className = "cf mb2";
			add_location(div16, file, 30, 8, 1405);
			div17.className = "fl w-25 pa2";
			add_location(div17, file, 42, 16, 2163);
			attr(input6, "type", "text");
			input6.name = "birthday";
			input6.placeholder = "YYYY/MM/DD";
			input6.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input6, file, 44, 20, 2266);
			div18.className = "fl w-50";
			add_location(div18, file, 43, 16, 2224);
			div19.className = "fl w-100";
			add_location(div19, file, 41, 12, 2124);
			div20.className = "cf mb2";
			add_location(div20, file, 40, 8, 2091);
			div21.className = "fl w-25 pa2";
			add_location(div21, file, 50, 16, 2518);
			button2.type = "submit";
			button2.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button2, file, 52, 20, 2608);
			div22.className = "fl w-50";
			add_location(div22, file, 51, 16, 2566);
			div23.className = "fl w-100";
			add_location(div23, file, 49, 12, 2479);
			div24.className = "cf mb2";
			add_location(div24, file, 48, 8, 2446);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 5, 4, 389);

			dispose = [
				listen(button0, "click", ctx.switchEnglishLocale),
				listen(button1, "click", ctx.switchVietnameseLocale)
			];
		},

		m: function mount(target, anchor) {
			insert(target, div0, anchor);
			append(div0, t0);
			append(div0, button0);
			append(button0, t1);
			append(div0, t2);
			append(div0, button1);
			append(button1, t3);
			insert(target, t4, anchor);
			insert(target, form, anchor);
			append(form, div4);
			append(div4, div3);
			append(div3, div1);
			append(div1, t5);
			append(div3, t6);
			append(div3, div2);
			append(div2, input0);
			append(form, t7);
			append(form, div8);
			append(div8, div7);
			append(div7, div5);
			append(div5, t8);
			append(div7, t9);
			append(div7, div6);
			append(div6, input1);
			append(form, t10);
			append(form, div12);
			append(div12, div11);
			append(div11, div9);
			append(div9, t11);
			append(div11, t12);
			append(div11, div10);
			append(div10, input2);
			append(form, t13);
			append(form, div16);
			append(div16, div15);
			append(div15, div13);
			append(div13, t14);
			append(div15, t15);
			append(div15, div14);
			append(div14, label0);
			append(label0, input3);
			append(label0, t16);
			append(div14, t17);
			append(div14, label1);
			append(label1, input4);
			append(label1, t18);
			append(div14, t19);
			append(div14, label2);
			append(label2, input5);
			append(label2, t20);
			append(form, t21);
			append(form, div20);
			append(div20, div19);
			append(div19, div17);
			append(div17, t22);
			append(div19, t23);
			append(div19, div18);
			append(div18, input6);
			append(form, t24);
			append(form, div24);
			append(div24, div23);
			append(div23, div21);
			append(div23, t25);
			append(div23, div22);
			append(div22, button2);
			append(button2, t26);
		},

		p: function update(changed, ctx) {
			if ((changed._locale) && button0_class_value !== (button0_class_value = "ba b--black-20 ph3 pv2 br2 " + (ctx._locale === 'en_US' ? 'bg-blue white' : ''))) {
				button0.className = button0_class_value;
			}

			if ((changed._locale) && button1_class_value !== (button1_class_value = "ba b--black-20 ph3 pv2 br2 " + (ctx._locale === 'vi_VN' ? 'bg-blue white' : ''))) {
				button1.className = button1_class_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div0);
				detach(t4);
				detach(form);
			}

			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope || changed._locale) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;
let _locale = 'en_US';

const switchLocale = (locale) => {
    let localeData = en_US;
    $$invalidate('_locale', _locale = locale);
    switch (_locale) {
        case 'vi_VN':
            localeData = vi_VN;
            break;

        case 'en_US':
        default:
            localeData = en_US;
            break;
    }
    if (fv) {
        fv.setLocale(_locale, localeData).resetForm();
    }
};

const switchEnglishLocale = () => switchLocale('en_US');
const switchVietnameseLocale = () => switchLocale('vi_VN');

onMount(() => {
    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(
        form,
        {
            locale: 'en_US',
            localization: en_US,
            fields: {
                // Since the messages of notEmpty, stringLength, regexp are not set here,
                // they will be taken from language package
                username: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/
                        },
                    }
                },
                // Messages are taken from language package
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                // Messages of notEmpty and stringLength validators
                // are taken from language package
                password: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        },
                        different: {
                            compare: () => {
                                return form.querySelector('[name="username"]').value;
                            },
                        }
                    }
                },
                birthday: {
                    validators: {
                        notEmpty: {
                        },
                        date: {
                            format: 'YYYY/MM/DD'
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                        }
                    }
                }
            },
            plugins: {
                trigger: new Trigger(),
                tachyons: new Tachyons(),
                submitButton: new SubmitButton(),
                icon: new Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                l10n: new L10n({
                    username: {
                        stringLength: {
                            // Method 2: Use a literal object to define messages
                            en_US: 'The username must be between %s and %s characters long',
                            vi_VN: 'Tên đăng nhập phải có ít nhất %s và nhiều nhất %s ký tự',
                        },
                    },
                    password: {
                        // Method 3: Use a callback to determine message in particular language
                        different: (field, validator) => {
                            return {
                                en_US: 'The password can not be same as username',
                                vi_VN: 'Mật khẩu phải khác tên đăng nhập',
                            };
                        },
                    },
                }),
                demoFrame: new DemoFrame({
                    sender: '/guide/plugins/l10n/basic/tachyons',
                    sampleCode: sampleCode,
                }),
            },
        }
    ));

    return () => {
        fv.destroy();
    };
});

	return {
		_locale,
		switchEnglishLocale,
		switchVietnameseLocale
	};
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;
