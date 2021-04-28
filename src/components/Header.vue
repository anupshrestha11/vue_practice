<template>
    <header>
        <div>
            <h2>Vue Practice</h2>
        </div>
        <ul class="nav-list">
            <li>
                <router-link :to="{ name: 'Home' }">Todo</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    background-color: dodgerblue;
    h2 {
        margin: 0;
        color: #fff;
    }
}
.nav-list {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    li {
        display: block;
    }
    a {
        text-decoration: none;
        padding: 10px;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        margin: 0 5px;
        border-radius: 5px;
        font-weight: 600;
        &.router-link-exact-active {
            color: hsl(0, 0%, 90%);
        }
    }
}
</style>
