<template>
    <!-- HTML-->
     <div>
     <h1> O que é o v-text?</h1>
     <p v-text="texto"></p>
    </div>
</template>

<script>
    export default{
        name: 'NovoComponente',
        props:{
            texto : String
        }
    }

</script>

<style scoped>

h1{
    color: red;
}


</style>