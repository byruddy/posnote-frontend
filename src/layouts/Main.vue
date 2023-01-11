<template>
    <topbar />
    <div class="layout-main">
        Layout Main 
    </div>
    <footbar />
</template>

<script>
import Topbar from './components/Topbar.vue'
import Footbar from './components/Footbar.vue'

export default {
    components: {Topbar, Footbar}
}
</script>

<style></style>