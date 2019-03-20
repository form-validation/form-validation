export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Event name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Alert on</label>
            <div class="col-sm-9">
                <div class="row js-alert-field-container">
                    <div class="col-sm-6">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="0" />
                            <label class="form-check-label">On event day</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="1" />
                            <label class="form-check-label">1 day before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="2" />
                            <label class="form-check-label">2 days before</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="3" />
                            <label class="form-check-label">3 days before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="7" />
                            <label class="form-check-label">1 week before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="14" />
                            <label class="form-check-label">2 weeks before</label>
                        </div>
                    </div>
                    <div id="alertDayIcon"></div>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <!-- The container to place the error of checkboxes -->
                <div id="alertDayMessage"></div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

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
                bootstrap: new FormValidation.plugins.Bootstrap({
                    defaultMessageContainer: false,
                    rowSelector: function(field, ele) {
                        return field === 'alertDay' ? '.js-alert-field-container' : '.form-group';
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
                    clazz: 'fv-help-block',
                    container: function(field, ele) {
                        return field === 'alertDay'
                                ? document.getElementById('alertDayMessage')
                                : FormValidation.plugins.Message.getClosestContainer(ele, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/);
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