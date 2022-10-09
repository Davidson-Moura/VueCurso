<template>
    <div>
        <ul>
            <li v-for="fru in frutas" :key="fru" > {{fru}}</li>
        </ul>
        <input type="text" @keydown.enter="add" v-model="fruta">
    </div>
</template>

<script>
import frutasMixin from './frutasMixin'
export default {
    mixins:[frutasMixin],
}

</script>