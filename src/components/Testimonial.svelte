<script>
// Public props
let user = '';
let avatar = '';

export {
    user,
    avatar,
};
</script>

<div class="fl w-100 w-third-ns pa2">
    <blockquote class="ml0 mt0 pl3 black-90 bl bw2 b--blue">
        <p class="lh-copy">
            <slot></slot>
        </p>
        <a href="https://twitter.com/{user}" class="link no-underline">
            <img src="/testimonial/{avatar}" alt="{user}" class="br-100 h2 w2 v-mid" /> &mdash; <cite>@{user}</cite>
        </a>
    </blockquote>
</div>