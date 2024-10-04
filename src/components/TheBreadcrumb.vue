<template>
    <nav aria-label="breadcrumb" class="container mt-4 pt-3">
        <base-loading v-if="!title"></base-loading>
        <ol v-else class="breadcrumb d-flex align-items-center">
            <li class="breadcrumb-item"><a href="#">خانه</a></li>
            <li class="breadcrumb-item"><a href="#">وبلاگ</a></li>
            <li class="breadcrumb-item"><a href="#">{{ categoryName }}</a></li>
            <li class="breadcrumb-item active">{{ title }}</li>
        </ol>
    </nav>
</template>

<script setup>
import BaseLoading from "./UI/BaseLoading.vue";

const props = defineProps({
    title: String,
    categoryName: String,
});
const { title } = props;
</script>

<style lang="scss" scoped>
.breadcrumb-item:not(:last-child)::after {
    content: url(../assets/icons/left.svg);
    float: left;
    padding-right: 8px;
    position: relative;
    top: 15%;
}
.breadcrumb-item::before {
    content: none;
}
.breadcrumb-item {
    height: 28px;
    line-height: 2;
    text-align: center;
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    padding-left: 12px;
}
</style>
