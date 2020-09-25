<BootstrapLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Gender</label>
                <div class="col-sm-9" id="genderContainer">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-secondary">
                            <input type="radio" name="gender" value="male"> Male
                        </label>
                        <label class="btn btn-secondary">
                            <input type="radio" name="gender" value="female"> Female
                        </label>
                        <label class="btn btn-secondary">
                            <input type="radio" name="gender" value="other"> Other
                        </label>
                    </div>
                </div>
            </div>
        
            <div class="form-group row">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </ResourceLoader>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
        fields: {
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            submitButton: new SubmitButton(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
                onPlaced: function(e) {
                    if (e.field === 'gender') {
                        document.getElementById('genderContainer').appendChild(e.iconElement);
                    }
                }
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/integrating-with-bootstrap-button-group/bootstrap',
                sampleCode: sampleCode,
            }),
        }
    });

    // Bootstrap 4.3.1 prevents the default action of radio buttons when being used with `data-toggle="buttons"`
    // So, we need to revalidate the field when it's changed manually
    jQuery(demoForm).find('[name="gender"]').on('change', function() {
        fv.revalidateField('gender');
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
