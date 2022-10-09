<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot name="autor"></slot><!--Os styles desse componente e do component pai serão colocado dentro do slot-->
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
