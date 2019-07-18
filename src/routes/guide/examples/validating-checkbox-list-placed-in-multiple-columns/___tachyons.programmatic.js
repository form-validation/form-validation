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
                <div class="fl w-25 pa2">Event name</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Alert on</div>
                <div class="fl w-75">
                    <div class="w-100 js-alert-field-container">
                        <div class="fl w-50">
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="0" /> On event day</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="1" /> 1 day before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="2" /> 2 days before</label>
                            </div>
                        </div>
                        <div class="fl w-50">
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="3" /> 3 days before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="7" /> 1 week before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="14" /> 2 weeks before</label>
                            </div>
                        </div>
                        <div id="alertDayIcon"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-75">
                    <!-- The container to place the error of checkboxes -->
                    <div id="alertDayMessage"></div>
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
    FormValidation.formValidation(
        form,
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The event name is required'
                        }
                    }
                },
                alertDay: {
                    validators: {
                        notEmpty: {
                            message: 'Please choose at least one checkbox'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons({
                    defaultMessageContainer: false,
                    rowSelector: function(field, ele) {
                        return field === 'alertDay' ? '.js-alert-field-container' : '.fl';
                    },
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                    onPlaced: function(e) {
                        if (e.field === 'alertDay') {
                            document.getElementById('alertDayIcon').appendChild(e.iconElement);
                        }
                    },
                }),
                message: new FormValidation.plugins.Message({
                    clazz: 'red lh-copy',
                    container: function(field, ele) {
                        return field === 'alertDay'
                                ? document.getElementById('alertDayMessage')
                                : FormValidation.plugins.Message.getClosestContainer(ele, form, /^(.*)fl(.*)$/);
                    },
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;