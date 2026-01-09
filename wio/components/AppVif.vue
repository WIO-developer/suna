<template>
    <div v-if="shouldShowAds">
        <!-- 모바일 또는 PC에서 접근한 경우에만 노출할 코드 -->
        <slot />
    </div>
    <div v-else>
        <!-- 웹뷰에서는 노출하지 않을 코드 -->
    </div>
</template>

<script>

export default {
    name: "AppVif",
    data() {
        return {
            shouldShowAds: false
        }
    },
    computed: {
    },
    methods: {
    },
    created() {
        // navigator 객체의 존재 여부를 체크
        if (typeof navigator !== 'undefined') {
            // user agent 체크
            const userAgent = navigator.userAgent
            if (!userAgent.includes('WIO')) {
                // 웹뷰에서 접근한 경우
                this.shouldShowAds = true
            }
        }
    },
}
</script>