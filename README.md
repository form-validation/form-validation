# FormValidation

The best validation library for JavaScript.

![FormValidation](/assets/screenshot.png)

## Biggest collection of validators

40+ validators, 50+ plugins

- [x] Cover most various types of form field
- [x] Develop, reuse custom validator
- [x] Support sync and async validators
- [x] Plugin based architectue

## Flexible

- [x] Customize icon
- [x] Customize error message
- [x] Customize error message location
- [x] Customize valid and invalid colors
- [x] Dynamic field
- [x] Enable, disable validators on the fly

## Localization

- [x] Language packages for error message
- [x] Support custom message
- [x] Support custom validators
- [x] Switch between locales
- [x] Validate ID and VAT numbers in many countries

## Declaring validation rules

- [x] Declarative mode

```html
<form id="registrationForm">
    <input
        name="userName"
        data-fv-not-empty="true"
        data-fv-not-empty___message="The username is required"
        data-fv-string-length="true"
        data-fv-string-length___min="6"
        data-fv-string-length___message="The name must be more than 6 characters long"
    />
</form>
```

- [x] Programmatic mode

```js
FormValidation.formValidation(
    document.getElementById('registrationForm'),
    {
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: 'The username is required',
                    },
                    stringLength: {
                        message: 'The name must be more than 6 characters long',
                        min: 6,                        
                    },
                },
            },
        },
    },
);
```

## Integration with your stack

- [x] Support native form
- [x] Support popular CSS frameworks via plugins
- [x] Support popular JavaScript frameworks
- [x] Easy to integrate with a framework

## Play nice with form libraries

- [x] Autocomplete
- [x] Color picker
- [x] Custom checkbox
- [x] Custom radio
- [x] Date picker
- [x] International telephone input
- [x] Mask input
- [x] Rich editor
- [x] Select
- [x] Star rating
- [x] Tag input
- [x] Time picker
- [x] Toggle
- [x] Wizard

and more!

## Supported browsers

Support the latest version of

- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] Opera
- [x] Edge
- [x] Internet Explorer 11

## About

This project is developed by _Nguyen Huu Phuoc_. I love building products and sharing knowledge.

Be my friend on
* [Twitter](https://twitter.com/nghuuphuoc)
* [dev.to](https://dev.to/phuocng)
* [Github](https://github.com/phuoc-ng)