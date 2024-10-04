<template>
    <header>
        <div class="header container d-flex justify-content-between align-items-center py-3">
            <button class="navbar-toggler d-md-none rounded-3" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <img src="../assets/icons/menu.svg" alt="menu">
            </button>
            <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header d-flex justify-content-between">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">سکان اکادمی</h5>
                    <button type="button" class="btn-close m-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <NavbarLinkList />
                    </ul>
                </div>
            </div>
            <div class="header__logo">
                <img src="../assets/icons/Logo.svg" alt="logo">
            </div>
            <div class="nav__list d-none d-md-block">
                <ul class="nav d-flex justify-content-between align-items-center p-0 m-0">
                    <NavbarLinkList />
                </ul>
            </div>
            <div class="header__login">
                <base-button>
                    <template v-slot:image>
                        <img src="../assets/icons/login.svg" alt="">
                    </template>
                    <template v-slot:default>
                        <span class="d-none d-md-inline-block pe-1">ورود | ثبت‌نام</span>
                    </template>
                </base-button>
            </div>
        </div>
    </header>
</template>
<script setup>
import NavbarLinkList from './NavbarLinkList.vue';
import BaseButton from './UI/BaseButton.vue';
</script>

<style lang="scss" scoped>
@import "../assets/styles/scss/variables";

.header__login {
    .btn {
        height: 37px;
        border: none;
        background-color: $secondary2-100;
        color: $grayscale-0;
    }
}

.navbar-toggler {
    padding: 7px;
    border: 1px solid $secondary2-100;

    img {
        color: $secondary2-100 ;
    }
}
</style>