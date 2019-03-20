export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Event</div>
                <div class="fl w-50">
                    <input type="text" name="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Date</div>
                <div class="fl w-50">
                    <input type="text" name="eventDate" placeholder="YYYY/MM/DD" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                eventDate: {
                    validators: {
                        notEmpty: {
                            message: 'The date is required'
                        },
                        callback: {
                            message: 'The date is not a valid',
                            callback: function(input) {
                                const value = input.value;
                                if (value === '') {
                                    return true;
                                }    

                                // Check if the input is a valid date
                                const result = date().validate({
                                    value: input.value,
                                    options: {
                                        format: 'YYYY/MM/DD',
                                    }
                                });
                                if (!result.valid) {
                                    return false;
                                } else {
                                    // Get the valid date object from result of validation
                                    const selectedDate = result.meta.date;
                                    const day = selectedDate.getDay();
                                    // Treat the field as invalid if the selected date is Sunday
                                    return (day === 0) ? { valid: false, message: 'Please choose a day except Sunday' } : true;
                                }
                            }
                        },
                    }
                },
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
            },
        }
    );

    flatpickr(form.querySelector('[name="eventDate"]'), {
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d',
        // After selecting a date, we need to revalidate the field
        onChange: function() {
            fv.revalidateField('eventDate');
        },
    });
});
</script-tag>
</body>
</html>
`;