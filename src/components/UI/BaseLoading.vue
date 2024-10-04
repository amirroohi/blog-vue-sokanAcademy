<template>
    <div class="loading d-flex justify-content-center align-items-center flex-column row-gap-3">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="loading__text">در حال بارگزاری...</p>
    </div>
</template>
<style lang="scss">
.loading {
    &__text {
        text-wrap: nowrap;
    }
}
</style>