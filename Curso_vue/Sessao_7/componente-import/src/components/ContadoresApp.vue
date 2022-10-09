<template>
    <div class="contadores">
        <app-contador v-for="i in 5" :key="i"></app-contador>
    </div>
</template>

<script>

export default {
}
</script>