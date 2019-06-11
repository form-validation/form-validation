<TachyonsLayout>
    <div class="mb2 pa2">
        Choose language <button type="button" on:click={switchEnglishLocale} class="ba b--black-20 ph3 pv2 br2 {_locale === 'en_US' ? 'bg-blue white' : ''}">English</button> <button type="button" on:click={switchVietnameseLocale} class="ba b--black-20 ph3 pv2 br2 {_locale === 'vi_VN' ? 'bg-blue white' : ''}">Tiếng Việt</button>
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
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import L10n from 'formvalidation/dist/es6/plugins/L10n';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import en_US from 'formvalidation/dist/es6/locales/en_US';
import vi_VN from 'formvalidation/dist/es6/locales/vi_VN';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;
let _locale = 'en_US';

const switchLocale = (locale) => {
    let localeData = en_US;
    _locale = locale;
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
    fv = formValidation(
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
                    sender: '/guide/plugins/l10n/basic/Tachyons',
                    sampleCode: sampleCode,
                }),
            },
        }
    );

    return () => {
        fv.destroy();
    };
});
</script>
