<svelte:head>
	<title>FormValidation • Field selector</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Showing credit card icon</h2>
    
    <section class="mv5">
        <p class="lh-copy">The following example shows credit card icon provided by <a href="http://fontawesome.io/icons/#payment" class="blue dim link">Font Awesome</a> based on the card type.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Card type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Icon</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">CSS class</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">American Express</td>
                <td class="pv2 ph3"><i class="fa fa-cc-amex"></i></td>
                <td class="pv2 ph3"><code>fa fa-cc-amex</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Discover</td>
                <td class="pv2 ph3"><i class="fa fa-cc-discover"></i></td>
                <td class="pv2 ph3"><code>fa fa-cc-discover</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Visa</td>
                <td class="pv2 ph3"><i class="fa fa-cc-visa"></i></td>
                <td class="pv2 ph3"><code>fa fa-cc-visa</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Mastercard</td>
                <td class="pv2 ph3"><i class="fa fa-cc-mastercard"></i></td>
                <td class="pv2 ph3"><code>fa fa-cc-mastercard</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Other</td>
                <td class="pv2 ph3"><i class="fa fa-credit-card"></i></td>
                <td class="pv2 ph3"><code>fa fa-credit-card</code></td>
            </tr>
        </table>
        <Tip><a href="http://paymentfont.io/" class="blue dim link">PaymentFont</a> and <a href="http://www.orlandotm.com/payment-webfont/" class="blue dim link">Payment Webfont</a> provide more payment icons</Tip>
        <Demo prefix="/guide/examples/showing-credit-card-icon" frameworks={['Tachyons']} />
    </section>

    <Examples examples={['Accepting test credit card numbers', 'Asking credit card number to match with selected type']} />

    <RelatedValidators validators={['creditCard']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>
