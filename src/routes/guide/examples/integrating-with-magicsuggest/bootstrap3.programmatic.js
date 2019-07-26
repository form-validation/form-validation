export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magicsuggest/2.1.4/magicsuggest-min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

    <style>
    /* See https://formvalidation.io/guide/examples/adjusting-icon-position */
    .form-horizontal .destination-container .form-control-feedback {
        right: -20px;
    }
    </style>
</head>
<body>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="form-group">
            <label class="col-xs-3 control-label">Choose the destination</label>
            <div class="col-xs-5 destination-container">
                <input type="hidden" name="dest" />
                <div id="destination"></div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-xs-9 col-xs-offset-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<!-- magicSuggest doesn't work with jQuery 3 or later -->
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/magicsuggest/2.1.4/magicsuggest.js"></script-tag>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag> 
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const demoForm = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            dest: {
                validators: {
                    notEmpty: {
                        message: 'Please choose one city'
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            bootstrap3: new FormValidation.plugins.Bootstrap3(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        }
    });

    // The hidden field
    const destField = demoForm.querySelector('[name="dest"]');

    const destinationEle = jQuery('#destination').magicSuggest({
        data: ['Amsterdam', 'Barcelona', 'Hanoi', 'London', 'New York', 'Paris', 'Rome', 'San Francisco', 'Seoul', 'Tokyo'],
        maxSelection: 1
    });
    jQuery(destinationEle).on('selectionchange', function(e, m) {
        // Get the selected item
        const data = this.getSelection();
        
        // Update the value for hidden field
        destField.value = (data.length == 0) ? '' : data[0].name;

        // Revalidate the field
        fv.revalidateField('dest');
    });
});
</script-tag>
</body>
</html>
`;