export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-10 pa2">Book</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="book[0].title" placeholder="Title" />
                </div>
                <div class="fl w-25 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="book[0].isbn" placeholder="ISBN" />
                </div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="book[0].price" placeholder="Price" />
                </div>
                <div class="fl w-10 ph2">
                    <button type="button" class="ba b--black-20 bg-green white ph3 pv2 br2" id="addButton">+</button>
                </div>
            </div>
        </div>

        <!-- Template -->
        <div class="cf mb2" id="template" style="display: none;">
            <div class="fl w-100">
                <div class="fl w-10 pa2">Book</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="book.title" placeholder="Title" />
                </div>
                <div class="fl w-25 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="book.isbn" placeholder="ISBN" />
                </div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="book.price" placeholder="Price" />
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<!-- 
You have to include the full version of FormValidation which contains all validators
including the isbn validator 
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const titleValidators = {
        validators: {
            notEmpty: {
                message: 'The title is required'
            }
        }
    };
    const isbnValidators = {
        validators: {
            notEmpty: {
                message: 'The ISBN is required'
            },
            isbn: {
                message: 'The ISBN is not valid'
            }
        }
    };
    const priceValidators = {
        validators: {
            notEmpty: {
                message: 'The price is required'
            },
            numeric: {
                message: 'The price must be a numeric number'
            }
        }
    };

    const demoForm = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            'book[0].title': titleValidators,
            'book[0].isbn': isbnValidators,
            'book[0].price': priceValidators,
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
    }).registerValidator('isbn', isbn);

    const removeRow = function(rowIndex) {
        const row = demoForm.querySelector('[data-row-index="' + rowIndex + '"]');

        // Remove field
        fv.removeField('book[' + rowIndex + '].title')
            .removeField('book[' + rowIndex + '].isbn')
            .removeField('book[' + rowIndex + '].price');

        // Remove row
        row.parentNode.removeChild(row);
    };

    const template = document.getElementById('template');
    let rowIndex = 0;
    document.getElementById('addButton').addEventListener('click', function() {
        rowIndex++;

        const clone = template.cloneNode(true);
        clone.removeAttribute('id');

        // Show the row
        clone.style.display = 'block';

        clone.setAttribute('data-row-index', rowIndex);

        // Insert before the template
        template.before(clone);

        clone.querySelector('[data-name="book.title"]').setAttribute('name', 'book[' + rowIndex + '].title');
        clone.querySelector('[data-name="book.isbn"]').setAttribute('name', 'book[' + rowIndex + '].isbn');
        clone.querySelector('[data-name="book.price"]').setAttribute('name', 'book[' + rowIndex + '].price');

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        fv.addField('book[' + rowIndex + '].title', titleValidators)
            .addField('book[' + rowIndex + '].isbn', isbnValidators)
            .addField('book[' + rowIndex + '].price', priceValidators);

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