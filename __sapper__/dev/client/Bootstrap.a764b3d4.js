import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, C as listen, o as insert, p as append, r as noop } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as ReceiveMessage } from './chunk.75c83501.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';
import './chunk.8def1eca.js';
import { a as id } from './chunk.58722ca4.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Country</label>
            <div class="col-sm-5">
                <select class="form-control" name="country">
                    <option value="AR">Argentina</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BR">Brazil</option>
                    <option value="BG">Bulgari</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CO">Colombia</option>
                    <option value="HR">Croatia</option>
                    <option value="CZ">Czech</option>
                    <option value="DK">Denmark</option>
                    <option value="EE">Estonia</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="HK">Hong Kong</option>
                    <option value="IS">Iceland</option>
                    <option value="ID">India</option>
                    <option value="IE">Ireland</option>
                    <option value="KR">Korea</option>
                    <option value="LV">Latvia</option>
                    <option value="LT">Lithuania</option>
                    <option value="MK">Macedonia</option>
                    <option value="MY">Malaysia</option>
                    <option value="MX">Mexico</option>
                    <option value="ME">Montenegro</option>
                    <option value="NL">Netherlands</option>
                    <option value="NO">Norway</option>
                    <option value="PE">Peru</option>
                    <option value="PL">Poland</option>
                    <option value="RO">Romania</option>
                    <option value="SM">San Marino</option>
                    <option value="RS">Serbia</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="ZA">South Africa</option>
                    <option value="ES">Spain</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="TW">Taiwan</option>
                    <option value="TH">Thailand</option>
                    <option value="UY">Uruguay</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">ID number</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="idNumber" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<!-- 
You have to include the full version of FormValidation which contains all validators
including the id validator 
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                idNumber: {
                    validators: {
                        id: {
                            country: function() {
                                return form.querySelector('[name="country"]').value;
                            },
                            message: 'The value is not a valid ID'
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
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    form.querySelector('[name="country"]').addEventListener('change', function() {
        // Revalidate the ID field whenever user changes the country
        fv.revalidateField('idNumber');
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/id/basic/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/id/basic/Bootstrap.svelte";

// (2:4) <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/id/basic" on:received={receive}>
function create_default_slot_1(ctx) {
	var form, div1, label0, t0, t1, div0, select, option0, t2, option1, t3, option2, t4, option3, t5, option4, t6, option5, t7, option6, t8, option7, t9, option8, t10, option9, t11, option10, t12, option11, t13, option12, t14, option13, t15, option14, t16, option15, t17, option16, t18, option17, t19, option18, t20, option19, t21, option20, t22, option21, t23, option22, t24, option23, t25, option24, t26, option25, t27, option26, t28, option27, t29, option28, t30, option29, t31, option30, t32, option31, t33, option32, t34, option33, t35, option34, t36, option35, t37, option36, t38, option37, t39, option38, t40, option39, t41, t42, div3, label1, t43, t44, div2, input, dispose;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t0 = text("Country");
			t1 = space();
			div0 = element("div");
			select = element("select");
			option0 = element("option");
			t2 = text("Argentina");
			option1 = element("option");
			t3 = text("Bosnia and Herzegovina");
			option2 = element("option");
			t4 = text("Brazil");
			option3 = element("option");
			t5 = text("Bulgari");
			option4 = element("option");
			t6 = text("Chile");
			option5 = element("option");
			t7 = text("China");
			option6 = element("option");
			t8 = text("Colombia");
			option7 = element("option");
			t9 = text("Croatia");
			option8 = element("option");
			t10 = text("Czech");
			option9 = element("option");
			t11 = text("Denmark");
			option10 = element("option");
			t12 = text("Estonia");
			option11 = element("option");
			t13 = text("Finland");
			option12 = element("option");
			t14 = text("France");
			option13 = element("option");
			t15 = text("Hong Kong");
			option14 = element("option");
			t16 = text("Iceland");
			option15 = element("option");
			t17 = text("India");
			option16 = element("option");
			t18 = text("Ireland");
			option17 = element("option");
			t19 = text("Korea");
			option18 = element("option");
			t20 = text("Latvia");
			option19 = element("option");
			t21 = text("Lithuania");
			option20 = element("option");
			t22 = text("Macedonia");
			option21 = element("option");
			t23 = text("Malaysia");
			option22 = element("option");
			t24 = text("Mexico");
			option23 = element("option");
			t25 = text("Montenegro");
			option24 = element("option");
			t26 = text("Netherlands");
			option25 = element("option");
			t27 = text("Norway");
			option26 = element("option");
			t28 = text("Peru");
			option27 = element("option");
			t29 = text("Poland");
			option28 = element("option");
			t30 = text("Romania");
			option29 = element("option");
			t31 = text("San Marino");
			option30 = element("option");
			t32 = text("Serbia");
			option31 = element("option");
			t33 = text("Slovakia");
			option32 = element("option");
			t34 = text("Slovenia");
			option33 = element("option");
			t35 = text("South Africa");
			option34 = element("option");
			t36 = text("Spain");
			option35 = element("option");
			t37 = text("Sweden");
			option36 = element("option");
			t38 = text("Switzerland");
			option37 = element("option");
			t39 = text("Taiwan");
			option38 = element("option");
			t40 = text("Thailand");
			option39 = element("option");
			t41 = text("Uruguay");
			t42 = space();
			div3 = element("div");
			label1 = element("label");
			t43 = text("ID number");
			t44 = space();
			div2 = element("div");
			input = element("input");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Country");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n                ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			select = claim_element(div0_nodes, "SELECT", { class: true, name: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t2 = claim_text(option0_nodes, "Argentina");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t3 = claim_text(option1_nodes, "Bosnia and Herzegovina");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t4 = claim_text(option2_nodes, "Brazil");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t5 = claim_text(option3_nodes, "Bulgari");
			option3_nodes.forEach(detach);

			option4 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option4_nodes = children(option4);

			t6 = claim_text(option4_nodes, "Chile");
			option4_nodes.forEach(detach);

			option5 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option5_nodes = children(option5);

			t7 = claim_text(option5_nodes, "China");
			option5_nodes.forEach(detach);

			option6 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option6_nodes = children(option6);

			t8 = claim_text(option6_nodes, "Colombia");
			option6_nodes.forEach(detach);

			option7 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option7_nodes = children(option7);

			t9 = claim_text(option7_nodes, "Croatia");
			option7_nodes.forEach(detach);

			option8 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option8_nodes = children(option8);

			t10 = claim_text(option8_nodes, "Czech");
			option8_nodes.forEach(detach);

			option9 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option9_nodes = children(option9);

			t11 = claim_text(option9_nodes, "Denmark");
			option9_nodes.forEach(detach);

			option10 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option10_nodes = children(option10);

			t12 = claim_text(option10_nodes, "Estonia");
			option10_nodes.forEach(detach);

			option11 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option11_nodes = children(option11);

			t13 = claim_text(option11_nodes, "Finland");
			option11_nodes.forEach(detach);

			option12 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option12_nodes = children(option12);

			t14 = claim_text(option12_nodes, "France");
			option12_nodes.forEach(detach);

			option13 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option13_nodes = children(option13);

			t15 = claim_text(option13_nodes, "Hong Kong");
			option13_nodes.forEach(detach);

			option14 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option14_nodes = children(option14);

			t16 = claim_text(option14_nodes, "Iceland");
			option14_nodes.forEach(detach);

			option15 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option15_nodes = children(option15);

			t17 = claim_text(option15_nodes, "India");
			option15_nodes.forEach(detach);

			option16 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option16_nodes = children(option16);

			t18 = claim_text(option16_nodes, "Ireland");
			option16_nodes.forEach(detach);

			option17 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option17_nodes = children(option17);

			t19 = claim_text(option17_nodes, "Korea");
			option17_nodes.forEach(detach);

			option18 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option18_nodes = children(option18);

			t20 = claim_text(option18_nodes, "Latvia");
			option18_nodes.forEach(detach);

			option19 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option19_nodes = children(option19);

			t21 = claim_text(option19_nodes, "Lithuania");
			option19_nodes.forEach(detach);

			option20 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option20_nodes = children(option20);

			t22 = claim_text(option20_nodes, "Macedonia");
			option20_nodes.forEach(detach);

			option21 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option21_nodes = children(option21);

			t23 = claim_text(option21_nodes, "Malaysia");
			option21_nodes.forEach(detach);

			option22 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option22_nodes = children(option22);

			t24 = claim_text(option22_nodes, "Mexico");
			option22_nodes.forEach(detach);

			option23 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option23_nodes = children(option23);

			t25 = claim_text(option23_nodes, "Montenegro");
			option23_nodes.forEach(detach);

			option24 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option24_nodes = children(option24);

			t26 = claim_text(option24_nodes, "Netherlands");
			option24_nodes.forEach(detach);

			option25 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option25_nodes = children(option25);

			t27 = claim_text(option25_nodes, "Norway");
			option25_nodes.forEach(detach);

			option26 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option26_nodes = children(option26);

			t28 = claim_text(option26_nodes, "Peru");
			option26_nodes.forEach(detach);

			option27 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option27_nodes = children(option27);

			t29 = claim_text(option27_nodes, "Poland");
			option27_nodes.forEach(detach);

			option28 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option28_nodes = children(option28);

			t30 = claim_text(option28_nodes, "Romania");
			option28_nodes.forEach(detach);

			option29 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option29_nodes = children(option29);

			t31 = claim_text(option29_nodes, "San Marino");
			option29_nodes.forEach(detach);

			option30 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option30_nodes = children(option30);

			t32 = claim_text(option30_nodes, "Serbia");
			option30_nodes.forEach(detach);

			option31 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option31_nodes = children(option31);

			t33 = claim_text(option31_nodes, "Slovakia");
			option31_nodes.forEach(detach);

			option32 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option32_nodes = children(option32);

			t34 = claim_text(option32_nodes, "Slovenia");
			option32_nodes.forEach(detach);

			option33 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option33_nodes = children(option33);

			t35 = claim_text(option33_nodes, "South Africa");
			option33_nodes.forEach(detach);

			option34 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option34_nodes = children(option34);

			t36 = claim_text(option34_nodes, "Spain");
			option34_nodes.forEach(detach);

			option35 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option35_nodes = children(option35);

			t37 = claim_text(option35_nodes, "Sweden");
			option35_nodes.forEach(detach);

			option36 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option36_nodes = children(option36);

			t38 = claim_text(option36_nodes, "Switzerland");
			option36_nodes.forEach(detach);

			option37 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option37_nodes = children(option37);

			t39 = claim_text(option37_nodes, "Taiwan");
			option37_nodes.forEach(detach);

			option38 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option38_nodes = children(option38);

			t40 = claim_text(option38_nodes, "Thailand");
			option38_nodes.forEach(detach);

			option39 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option39_nodes = children(option39);

			t41 = claim_text(option39_nodes, "Uruguay");
			option39_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t42 = claim_text(form_nodes, "\n            ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t43 = claim_text(label1_nodes, "ID number");
			label1_nodes.forEach(detach);
			t44 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 4, 16, 246);
			option0.__value = "AR";
			option0.value = option0.__value;
			add_location(option0, file, 7, 24, 455);
			option1.__value = "BA";
			option1.value = option1.__value;
			add_location(option1, file, 8, 24, 517);
			option2.__value = "BR";
			option2.value = option2.__value;
			add_location(option2, file, 9, 24, 592);
			option3.__value = "BG";
			option3.value = option3.__value;
			add_location(option3, file, 10, 24, 651);
			option4.__value = "CL";
			option4.value = option4.__value;
			add_location(option4, file, 11, 24, 711);
			option5.__value = "CN";
			option5.value = option5.__value;
			add_location(option5, file, 12, 24, 769);
			option6.__value = "CO";
			option6.value = option6.__value;
			add_location(option6, file, 13, 24, 827);
			option7.__value = "HR";
			option7.value = option7.__value;
			add_location(option7, file, 14, 24, 888);
			option8.__value = "CZ";
			option8.value = option8.__value;
			add_location(option8, file, 15, 24, 948);
			option9.__value = "DK";
			option9.value = option9.__value;
			add_location(option9, file, 16, 24, 1006);
			option10.__value = "EE";
			option10.value = option10.__value;
			add_location(option10, file, 17, 24, 1066);
			option11.__value = "FI";
			option11.value = option11.__value;
			add_location(option11, file, 18, 24, 1126);
			option12.__value = "FR";
			option12.value = option12.__value;
			add_location(option12, file, 19, 24, 1186);
			option13.__value = "HK";
			option13.value = option13.__value;
			add_location(option13, file, 20, 24, 1245);
			option14.__value = "IS";
			option14.value = option14.__value;
			add_location(option14, file, 21, 24, 1307);
			option15.__value = "ID";
			option15.value = option15.__value;
			add_location(option15, file, 22, 24, 1367);
			option16.__value = "IE";
			option16.value = option16.__value;
			add_location(option16, file, 23, 24, 1425);
			option17.__value = "KR";
			option17.value = option17.__value;
			add_location(option17, file, 24, 24, 1485);
			option18.__value = "LV";
			option18.value = option18.__value;
			add_location(option18, file, 25, 24, 1543);
			option19.__value = "LT";
			option19.value = option19.__value;
			add_location(option19, file, 26, 24, 1602);
			option20.__value = "MK";
			option20.value = option20.__value;
			add_location(option20, file, 27, 24, 1664);
			option21.__value = "MY";
			option21.value = option21.__value;
			add_location(option21, file, 28, 24, 1726);
			option22.__value = "MX";
			option22.value = option22.__value;
			add_location(option22, file, 29, 24, 1787);
			option23.__value = "ME";
			option23.value = option23.__value;
			add_location(option23, file, 30, 24, 1846);
			option24.__value = "NL";
			option24.value = option24.__value;
			add_location(option24, file, 31, 24, 1909);
			option25.__value = "NO";
			option25.value = option25.__value;
			add_location(option25, file, 32, 24, 1973);
			option26.__value = "PE";
			option26.value = option26.__value;
			add_location(option26, file, 33, 24, 2032);
			option27.__value = "PL";
			option27.value = option27.__value;
			add_location(option27, file, 34, 24, 2089);
			option28.__value = "RO";
			option28.value = option28.__value;
			add_location(option28, file, 35, 24, 2148);
			option29.__value = "SM";
			option29.value = option29.__value;
			add_location(option29, file, 36, 24, 2208);
			option30.__value = "RS";
			option30.value = option30.__value;
			add_location(option30, file, 37, 24, 2271);
			option31.__value = "SK";
			option31.value = option31.__value;
			add_location(option31, file, 38, 24, 2330);
			option32.__value = "SI";
			option32.value = option32.__value;
			add_location(option32, file, 39, 24, 2391);
			option33.__value = "ZA";
			option33.value = option33.__value;
			add_location(option33, file, 40, 24, 2452);
			option34.__value = "ES";
			option34.value = option34.__value;
			add_location(option34, file, 41, 24, 2517);
			option35.__value = "SE";
			option35.value = option35.__value;
			add_location(option35, file, 42, 24, 2575);
			option36.__value = "CH";
			option36.value = option36.__value;
			add_location(option36, file, 43, 24, 2634);
			option37.__value = "TW";
			option37.value = option37.__value;
			add_location(option37, file, 44, 24, 2698);
			option38.__value = "TH";
			option38.value = option38.__value;
			add_location(option38, file, 45, 24, 2757);
			option39.__value = "UY";
			option39.value = option39.__value;
			add_location(option39, file, 46, 24, 2818);
			select.className = "form-control";
			select.name = "country";
			add_location(select, file, 6, 20, 360);
			div0.className = "col-sm-5";
			add_location(div0, file, 5, 16, 317);
			div1.className = "form-group row";
			add_location(div1, file, 3, 12, 201);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 51, 16, 2983);
			attr(input, "type", "text");
			input.className = "form-control";
			input.name = "idNumber";
			add_location(input, file, 53, 20, 3099);
			div2.className = "col-sm-5";
			add_location(div2, file, 52, 16, 3056);
			div3.className = "form-group row";
			add_location(div3, file, 50, 12, 2938);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 2, 8, 154);
			dispose = listen(select, "change", ctx.changeCountry);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(label0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, select);
			append(select, option0);
			append(option0, t2);
			append(select, option1);
			append(option1, t3);
			append(select, option2);
			append(option2, t4);
			append(select, option3);
			append(option3, t5);
			append(select, option4);
			append(option4, t6);
			append(select, option5);
			append(option5, t7);
			append(select, option6);
			append(option6, t8);
			append(select, option7);
			append(option7, t9);
			append(select, option8);
			append(option8, t10);
			append(select, option9);
			append(option9, t11);
			append(select, option10);
			append(option10, t12);
			append(select, option11);
			append(option11, t13);
			append(select, option12);
			append(option12, t14);
			append(select, option13);
			append(option13, t15);
			append(select, option14);
			append(option14, t16);
			append(select, option15);
			append(option15, t17);
			append(select, option16);
			append(option16, t18);
			append(select, option17);
			append(option17, t19);
			append(select, option18);
			append(option18, t20);
			append(select, option19);
			append(option19, t21);
			append(select, option20);
			append(option20, t22);
			append(select, option21);
			append(option21, t23);
			append(select, option22);
			append(option22, t24);
			append(select, option23);
			append(option23, t25);
			append(select, option24);
			append(option24, t26);
			append(select, option25);
			append(option25, t27);
			append(select, option26);
			append(option26, t28);
			append(select, option27);
			append(option27, t29);
			append(select, option28);
			append(option28, t30);
			append(select, option29);
			append(option29, t31);
			append(select, option30);
			append(option30, t32);
			append(select, option31);
			append(option31, t33);
			append(select, option32);
			append(option32, t34);
			append(select, option33);
			append(option33, t35);
			append(select, option34);
			append(option34, t36);
			append(select, option35);
			append(option35, t37);
			append(select, option36);
			append(option36, t38);
			append(select, option37);
			append(option37, t39);
			append(select, option38);
			append(option38, t40);
			append(select, option39);
			append(option39, t41);
			append(form, t42);
			append(form, div3);
			append(div3, label1);
			append(label1, t43);
			append(div3, t44);
			append(div3, div2);
			append(div2, input);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}

			dispose();
		}
	};
}

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var current;

	var receivemessage = new ReceiveMessage({
		props: {
		channel: "SAMPLE_FIELD_VALUE",
		sender: "/guide/validators/id/basic",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});
	receivemessage.$on("received", ctx.receive);

	return {
		c: function create() {
			receivemessage.$$.fragment.c();
		},

		l: function claim(nodes) {
			receivemessage.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(receivemessage, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var receivemessage_changes = {};
			if (changed.$$scope) receivemessage_changes.$$scope = { changed, ctx };
			receivemessage.$set(receivemessage_changes);
		},

		i: function intro(local) {
			if (current) return;
			receivemessage.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			receivemessage.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			receivemessage.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var bootstraplayout = new BootstrapLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstraplayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstraplayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstraplayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstraplayout_changes = {};
			if (changed.onLoaded) bootstraplayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bootstraplayout_changes.$$scope = { changed, ctx };
			bootstraplayout.$set(bootstraplayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstraplayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstraplayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstraplayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="idNumber"]').value = v.sample;

    if (fv) {
        fv.revalidateField('idNumber').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/id/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const changeCountry = () => {
    // Revalidate the ID field whenever user changes the country
    if (fv) {
        fv.revalidateField('idNumber');
    }
};

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
        fields: {
            idNumber: {
                validators: {
                    id: {
                        country: () => {
                            return form.querySelector('[name="country"]').value;
                        },
                        message: 'The value is not a valid ID'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/id/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('id', id));
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { receive, changeCountry, onLoaded };
}

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;
