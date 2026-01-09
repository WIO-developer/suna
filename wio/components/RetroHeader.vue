<template>
    <div>
        <header id="header">
            <div class="flex_row_between_shell" style="align-items: center; height: 100%; display: flex;">
                <div style="margin-left: 1em; align-items: center;" class="flex_row_baseline_shell">
                    <nuxt-link style="width:2.4em; height: 2.4em;" to="/">
                        <img style="width:2.4em; height: 2.4em" :src="storage_url + `/wio/wio_sub_black_logo.png`" />
                    </nuxt-link>
                    <nuxt-link style="margin-left: 0.2em;" to="/retro">
                        <p class="scdream_greyDark_12">레트로</p>
                    </nuxt-link>
                </div>
            </div>
        </header>
    </div>
</template>
  
<script>
import Header from "~/assets/js/header";

export default {
    data() {
        return {
            header: "",
            lastScrollPosition: 0,
        }
    },
    props: {
    },
    components: {
        Header: Header,
    },
    computed: {
        storage_url: {
            get() {
                return `${process.env.VUE_APP_STORAGE_URL}/images`
            }
        },
        server_url: {
            get() {
                return `${process.env.VUE_APP_SERVER_URL}`;
            },
        },
    },
    methods: {
        onMenu() {
            Header.onScroll()
        },
        onScroll() {
            var header = document.getElementById("header")
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 1) {
                return
            }

            if (window.pageYOffset < this.lastScrollPosition) {
                header.style.top = "0"
            }
            else {
                header.style.top = "-60px"
            }

            this.lastScrollPosition = window.pageYOffset

        }
    },
    mounted() {
    },
    beforeMount() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    }
}
</script>