<template>
    <div>
        <header style="max-width:none; top:-60px" id="header" >
            <div class="flex_row_between_shell" style="align-items: center; height: 100%; display: flex; padding: 0 1em">
                <div style="align-items: center;" class="flex_row_baseline_shell">
                    <img style="height:3em;" :src="storage_url + `/collection/219/219_0_white.png`">
                    <a class="pc_ver" style="margin-left:1em; font-weight: 700; color:white; font-size: 1.7em;"
                        href="https://smartstore.naver.com/twoonenine/">STORE</a>
                    <a class="pc_ver" style="margin-left:1em; font-weight: 700; color:white; font-size: 1.7em;"
                        href="https://www.instagram.com/219_twoonenine/">INSTAGRAM</a>
                </div>
                <img class="mobile_ver" :src="storage_url + `/icon/white_menu.png`" @click="onMenu"
                    style="height:3em; opacity: 0.7;" />
            </div>
        </header>
        <Modal219Menu>
        </Modal219Menu>
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
                header.style.top = "-60px"
            }
            else {
                header.style.top = "0"
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