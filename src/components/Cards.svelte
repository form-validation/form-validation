<div style="display: grid; grid-column-gap: 2em; grid-row-gap: 2em; grid-template-columns: repeat({cols}, 1fr);">
    <slot></slot>
</div>

<script>
// Props
let cols = 3;

export {
    cols,
};
</script>
