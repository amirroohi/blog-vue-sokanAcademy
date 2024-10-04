<template>
    <div>
        <div class="card col p-0 overflow-hidden">
            <img v-if="!blogCoverPath" src="../../assets/images/fallback-blog.webp" class="card-img-top"
                alt="blog-cover-default" />
            <img v-if="blogCoverPath" :src=blogCoverPath class="card-img-top" alt="blog-cover" />
            <div class="card-body rounded-4">
                <p class="card-text">{{ blogTitle }}</p>
                <div class="course-creater">
                    <div class="profile-creater">
                        <img v-if="blogAuthorAvatar" :src=blogAuthorAvatar alt="author" class="rounded" />
                        <img v-if="!blogAuthorAvatar" src="../../assets/images/avatar.png" alt="author"
                            class="rounded" />
                    </div>
                    <span class="name-creater">{{ blogAuthorName }}</span>
                </div>
                <div class="course-details w-100">
                    <div class="course-spec row">
                        <div class="col">
                            <div class="category col">
                                <img src="../../assets/icons/category.svg" alt="">
                                <span>
                                    {{ blogCategory }}
                                </span>
                            </div>
                            <div class="clock col">
                                <img src="../../assets/icons/date.svg" alt="">
                                <span>
                                    {{ blogDuration }}
                                </span>
                            </div>
                        </div>
                        <div class="bookmark justify-content-end col">
                            <img src="../../assets/icons/bookmark.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    blogTitle: String,
    blogAuthorAvatar: String,
    blogAuthorName: String,
    blogCategory: String,
    blogDuration: String,
    blogCoverPath: String,
})
</script>