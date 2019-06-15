export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-10 pa2">Task(s)</div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="task[0].title" placeholder="Title" />
                </div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="task[0].dueDate" placeholder="Due date" />
                </div>
                <div class="fl w-10 ph2">
                    <button type="button" class="ba b--black-20 bg-green white ph3 pv2 br2" id="addButton">+</button>
                </div>
            </div>
        </div>

        <!-- Template -->
        <div class="cf mb2" id="template" style="display: none;">
            <div class="fl w-100">
                <div class="fl w-10 pa2"></div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="task.title" placeholder="Title" />
                </div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="task.dueDate" placeholder="Due date" />
                </div>
                <div class="fl w-10 ph2">
                    <button type="button" class="ba b--black-20 bg-green white ph3 pv2 br2 js-remove-button">-</button>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-10 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script-tag>    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const titleValidators = {
        validators: {
            notEmpty: {
                message: 'The task is required'
            }
        }
    };
    const dueDateValidators = {
        validators: {
            notEmpty: {
                message: 'The due date is required'
            },
            date: {
                format: 'YYYY/MM/DD',
                min: new Date(),
                message: 'The due date is not valid'
            }
        }
    };

    let rowIndex = 0;
    const demoForm = document.getElementById('demoForm');
    
    const attachPickAdayPicker = function(fieldName) {
        new Pikaday({
            field: demoForm.querySelector('[name="'+ fieldName+ '"]'),
            format: 'YYYY/MM/DD',
            toString: function(date, format) {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                return year + '/' + month + '/' + day;
            },
            onSelect: function() {
                // Revalidate the date field
                if (fv) {
                    fv.revalidateField(fieldName);
                }
            }
        });
    };
    
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            'task[0].title': titleValidators,
            'task[0].dueDate': dueDateValidators,
        },
        plugins: {
            submitButton: new FormValidation.plugins.SubmitButton(),
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    }).on('core.field.added', function(e) {
        if (e.field === 'task[' + rowIndex + '].dueDate') {
            // The added field is due date
            attachPickAdayPicker(e.field);
        }
    });

    // Attach pickaday to the first existing due date
    attachPickAdayPicker('task[0].dueDate');

    const removeRow = function(rowIndex) {
        const row = demoForm.querySelector('[data-row-index="' + rowIndex + '"]');

        // Remove field
        fv.removeField('task[' + rowIndex + '].title')
            .removeField('task[' + rowIndex + '].dueDate');

        // Remove row
        row.parentNode.removeChild(row);
    };

    const template = document.getElementById('template');
    document.getElementById('addButton').addEventListener('click', function() {
        rowIndex++;

        const clone = template.cloneNode(true);
        clone.removeAttribute('id');

        // Show the row
        clone.style.display = 'block';

        clone.setAttribute('data-row-index', rowIndex);

        // Insert before the template
        template.before(clone);

        clone.querySelector('[data-name="task.title"]').setAttribute('name', 'task[' + rowIndex + '].title');
        clone.querySelector('[data-name="task.dueDate"]').setAttribute('name', 'task[' + rowIndex + '].dueDate');

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        fv.addField('task[' + rowIndex + '].title', titleValidators)
            .addField('task[' + rowIndex + '].dueDate', dueDateValidators);

        // Handle the click event of removeButton
        const removeBtn = clone.querySelector('.js-remove-button');
        removeBtn.setAttribute('data-row-index', rowIndex);
        removeBtn.addEventListener('click', function(e) {
            // Get the row index
            const index = e.target.getAttribute('data-row-index');
            removeRow(index);
        });
    });
});
</script-tag>
</body>
</html>
`;