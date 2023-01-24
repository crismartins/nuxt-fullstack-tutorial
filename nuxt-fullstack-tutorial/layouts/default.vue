<template>
    <div class="app__body">
        <StructureNavbar />
        <main>
            <slot/>
        </main>
    </div>
</template>
<style lang="scss" scoped>
    .app__body{
        height: 100vh;
        display: flex;
        flex-direction: column;
        main{
            flex-grow: 1;
        }
    }
</style>