<template>
    <div>
        <header id="header" style="background:var(--greyLight-0)">
            <div class="backheader">
                <img :src="storage_url + `/icon/menu.png`" @click="onMenu"
                    style="margin:auto 0 auto 4%; width:2.4em; opacity: 0.7;" />
            </div>
        </header>
        <div class="margin_header"></div>
        <ModalHomeMenu>
        </ModalHomeMenu>
    </div>
</template>
  
<script>
import Header from "~/assets/js/header";
export default {
    data() {
        return {
            header: "",
            lastScrollPosition: 0,
            isModalViewed: false,
        }
    },
    props: {
    },
    components: {
        Header: Header
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