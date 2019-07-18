export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Birthday</div>
                <div class="fl w-75">
                    <div class="fl w-100">
                        <div class="fl w-20">
                            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="date" placeholder="Date" />
                        </div>
                        <div class="fl w-20">
                            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="month" placeholder="Month" />
                        </div>
                        <div class="fl w-20">
                            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="year" placeholder="Year" />
                        </div>
                    </div>
                    
                    <!-- Create a hidden field which is combined by 3 fields above -->
                    <input type="hidden" name="dob" />
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

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                dob: {
                    validators: {
                        notEmpty: {
                            message: 'Please fill out each field'
                        },
                        date: {
                            format: 'YYYY/MM/DD',
                            message: 'Please enter a valid date',
                        },
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
            },
        }
    );

    const keyupHandler = function() {
        const y = form.querySelector('[name="year"]').value;
        const m = form.querySelector('[name="month"]').value;
        const d = form.querySelector('[name="date"]').value;

        // Set the dob field value
        const dob = y === '' || m === '' || d === '' ? '' : [y, m, d].join('/');
        form.querySelector('[name="dob"]').value = dob;

        // Revalidate it
        fv.revalidateField('dob');
    };

    form.querySelector('[name="year"]').addEventListener('keyup', keyupHandler);
    form.querySelector('[name="month"]').addEventListener('keyup', keyupHandler);
    form.querySelector('[name="date"]').addEventListener('keyup', keyupHandler);
});
</script-tag>
</body>
</html>
`;