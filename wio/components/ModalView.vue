<template>
  <div class="modal">
    <slot/>
    <div class="overlay_modal" @click="$emit('close-modal')">
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalView"
}
</script>

<style scoped>
  .modal, .overlay_modal {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
  }
  .modal {
    z-index: 100;
  }
  .overlay_modal{
    opacity: 0.5;
    background-color: black;
  }
</style>