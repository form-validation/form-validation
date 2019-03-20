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
            <label class="col-sm-3 col-form-label">Proposal title</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="title" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Abstract</label>
            <div class="col-sm-9">
                <textarea class="form-control" name="abstract" style="height: 400px;"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Topics</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="angular" />
                    <label class="form-check-label">Angular</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="ember" />
                    <label class="form-check-label">Ember</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="react" />
                    <label class="form-check-label">React</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="vue" />
                    <label class="form-check-label">Vue</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Session type</label>
            <div class="col-sm-6">
                <select class="form-control" name="sessionType" style="width: 250px;">
                    <option value="">Choose the session type</option>
                    <option value="presentation">Presentation</option>
                    <option value="panel">Panel</option>
                    <option value="workshop">Workshop</option>
                </select>
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
    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    title: {
                        validators: {
                            notEmpty: {
                                message: 'The title is required'
                            }
                        }
                    },
                    abstract: {
                        validators: {
                            notEmpty: {
                                message: 'The abstract is required'
                            },
                            stringLength: {
                                max: 400,
                                message: 'The abstract must be less than 400 characters'
                            }
                        }
                    },
                    'topics[]': {
                        validators: {
                            notEmpty: {
                                message: 'The topic is required'
                            },
                            choice: {
                                min: 2,
                                max: 3,
                                message: 'Please choose 2 - 3 topics'
                            }
                        }
                    },
                    sessionType: {
                        validators: {
                            notEmpty: {
                                message: 'The session type is required'
                            }
                        }
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh',
                    }),
                },
            }
        )
        .on('core.element.validated', function(e) {
            // e.element presents the field element
            // e.valid indicates the field is valid or not
            if (e.valid) {
                // Remove has-success from the container
                const groupEle = FormValidation.utils.closest(e.element, '.form-group');
                if (groupEle) {
                    FormValidation.utils.classSet(groupEle, {
                        'has-success': false,
                    });
                }

                // Remove is-valid from the element
                FormValidation.utils.classSet(e.element, {
                    'is-valid': false,
                });
            }
        });
});
</script-tag>
</body>
</html>
`;