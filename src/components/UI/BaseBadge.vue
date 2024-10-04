<template>
    <span class="badge">{{ badgeText }}</span>
</template>
<script setup>
const props = defineProps({
    badgeText: String
})
</script>