<template>
    <section class="recommended-wrapper container-fluid">
        <div class="recommended container-xl d-flex flex-column justify-content-center align-items-center row-gap-5">
            <div class="recommended__header">
                <h2>مطالب مرتبط</h2>
            </div>
            <base-loading v-if="!relatedArticles"></base-loading>
            <div v-else class="recommended__articles-slider d-flex">
                <base-slide :cards="relatedArticles"></base-slide>
            </div>
        </div>
    </section>
</template>
<script setup>
import { getRelatedApi } from '../service/api';
import BaseSlide from './UI/BaseSlide.vue';
import BaseLoading from "./UI/BaseLoading.vue";

const relatedArticles = await getRelatedApi();
</script>