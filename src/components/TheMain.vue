<template>
    <main class="container d-flex justify-content-between column-gap-4">
        <base-loading v-if="!article"></base-loading>
        <section v-else class="main">
            <div id="main-content" class="main__content" v-html="article.text" ref="mainElement"></div>
            <div class="d-flex flex-column flex-md-row justify-content-between row-gap-4">
                <div class="d-flex column-gap-3 row-gap-3 flex-wrap">
                    <base-badge v-for="tag in tags" :badgeText="tag.name" :key="tag.id"></base-badge>
                </div>
                <div class="d-flex justify-content-end align-items-end">
                    <base-button>
                        <template v-slot:image>
                            <img src="../assets/icons/flag.svg" alt="report">
                        </template>
                        <template v-slot:default>
                            <span class="pe-1">گزارش محتوا</span>
                        </template>
                    </base-button>
                </div>
            </div>
        </section>
        <aside v-if="article" class="sidebar">
            <div class="sidebar__content d-flex flex-column row-gap-3">
                <div class="sidebar__list w-100 border border-2 rounded-4">
                    <h3><img src="../assets/icons/list.svg" alt="list-icon"><span>در این مقاله می‌خوانید</span></h3>
                    <ul>
                        <li v-for="item in elements"><a @click.prevent="scrollToElement(item)">
                                {{ item.innerText }}</a>
                        </li>
                    </ul>
                </div>
                <div
                    class="sidebar__view w-100 border border-2 rounded-4 d-flex justify-content-between align-items-center">
                    <div class="d-flex column-gap-3"><img src="../assets/icons/comment.svg" alt="your view"><span>دیدگاه
                            شما</span></div>
                    <div class="d-flex column-gap-3">
                        <img src="../assets/icons/bookmark.svg" alt="bookmark">
                        <img src="../assets/icons/link.svg" alt="link">
                        <img src="../assets/icons/share.svg" alt="share">
                    </div>
                </div>
            </div>
        </aside>
    </main>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import BaseBadge from './UI/BaseBadge.vue';
import BaseLoading from "./UI/BaseLoading.vue";
import BaseButton from './UI/BaseButton.vue';

const props = defineProps({
    tags: Array,
    article: Object
});
const { article, tags } = props;
const mainContent = document.getElementsByClassName("main__content");
const mainElement = ref();
const elements = ref();

// handle scroll for sidebar list
function scrollToElement(item) {
    window.scrollTo({
        top: item.offsetTop,
        behavior: "smooth",
    });
}

onMounted(() => {
    const h2Elements = mainContent[0].getElementsByTagName("h2");
    elements.value = [...h2Elements]
})
</script>