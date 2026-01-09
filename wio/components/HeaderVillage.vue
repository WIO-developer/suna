<template>
    <div>
        <header style="max-width:none" id="header">
            <div class="flex_row_between_shell" style="align-items: center; height: 100%; display: flex;">
                <div style="margin-left: 1em; align-items: center;" class="flex_row_baseline_shell">
                    <img style="height:3.5em;" :src="storage_url + `/village/logo_white_bold.png`">
                    <a class="pc_ver" style="margin-left:1em; font-family: 'hotel'; font-weight: light; color:white; font-size: 1.5em;"
                        href="https://www.instagram.com/wio.village/">INSTAGRAM</a>
                </div>
                <!--
                <img class="mobile_ver" :src="storage_url + `/icon/white_menu.png`" @click="onMenu"
                    style="height:3.5em; opacity: 0.7;margin-right:1em" />
                    -->
            </div>
        </header>
        <!--
        <ModalVillageMenu>
        </ModalVillageMenu>
        -->
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

<style scoped>

.mobile_ver {
  display: none;
}

@media screen and (max-width: 900px) {
  .mobile_ver {
    display: flex;
  }

  .pc_ver {
    display: none;
  }

}

</style>