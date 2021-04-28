<template>
    <div id="app">
        <Header></Header>
        <router-view />
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    components: {
        Header,
    },
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
