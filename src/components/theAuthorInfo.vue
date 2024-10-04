<template>
    <section class="container">
        <base-loading v-if="!author"></base-loading>
        <div v-else class="authorInfo d-flex flex-column flex-md-row justify-content-between align-items-center ">
            <div class="authorInfo__image">
                <img v-if="author.avatar" :src=author.avatar :alt=author.full_name>
                <img v-if="!author.avatar" src="../assets/images/avatar.png" alt="default avatar">
            </div>
            <div class="authorInfo__description">
                <h4>
                    <strong>{{ author.full_name }}</strong><img src="../assets/icons/verify.svg" alt="verifiedIcon">
                </h4>
                <p>{{ author.bio }}</p>
                <div class="d-flex flex-row-reverse">
                    <button class="btn">مشاهده پروفایل</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BaseLoading from "./UI/BaseLoading.vue";
defineProps({
    author: Object
})
</script>