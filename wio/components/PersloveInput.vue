<template>
  <div class="popup">
    <h5>성격유형을 입력하세요!</h5>

    <div class="type_button_shell">
      <input
        type="radio"
        name="type_radio_ei"
        value="E"
        id="type_radio_e"
        class="type_radio"
        v-model="type_radio_ei"
      />
      <label for="type_radio_e" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_e.png`" alt="E" />
      </label>
      <input
        type="radio"
        name="type_radio_ei"
        value="I"
        id="type_radio_i"
        class="type_radio"
        v-model="type_radio_ei"
      />
      <label for="type_radio_i" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_i.png`" alt="I" />
      </label>
    </div>
    <hr />

    <div class="type_button_shell">
      <input
        type="radio"
        name="type_radio_ns"
        value="N"
        id="type_radio_n"
        class="type_radio"
        v-model="type_radio_ns"
      />
      <label for="type_radio_n" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_n.png`" alt="N" />
      </label>
      <input
        type="radio"
        name="type_radio_ns"
        value="S"
        id="type_radio_s"
        class="type_radio"
        v-model="type_radio_ns"
      />
      <label for="type_radio_s" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_s.png`" alt="S" />
      </label>
    </div>
    <hr />

    <div class="type_button_shell">
      <input
        type="radio"
        name="type_radio_tf"
        value="T"
        id="type_radio_t"
        class="type_radio"
        v-model="type_radio_tf"
      />
      <label for="type_radio_t" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_t.png`" alt="T" />
      </label>
      <input
        type="radio"
        name="type_radio_tf"
        value="F"
        id="type_radio_f"
        class="type_radio"
        v-model="type_radio_tf"
      />
      <label for="type_radio_f" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_f.png`" alt="F" />
      </label>
    </div>
    <hr />

    <div class="type_button_shell">
      <input
        type="radio"
        name="type_radio_jp"
        value="J"
        id="type_radio_j"
        class="type_radio"
        v-model="type_radio_jp"
      />
      <label for="type_radio_j" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_j.png`" alt="J" />
      </label>
      <input
        type="radio"
        name="type_radio_jp"
        value="P"
        id="type_radio_p"
        class="type_radio"
        v-model="type_radio_jp"
      />
      <label for="type_radio_p" class="type_button">
        <img :src="storage_url+`/pers/perslove/perslove_p.png`" alt="P" />
      </label>
    </div>

    <div @click="getpers" class="type_result_button">확인</div>
  </div>
</template>

<script>
export default {
  name: "PersloveInput",
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  data() {
    return {
      temp_pers: "",
      type_radio_ei: "",
      type_radio_ns: "",
      type_radio_tf: "",
      type_radio_jp: "",
    };
  },
  components: {},
  props: {
    confirmInput: function () {},
  },
  methods: {
    getpers() {
      this.temp_pers =
        this.type_radio_ei +
        this.type_radio_ns +
        this.type_radio_tf +
        this.type_radio_jp;

      if (this.temp_pers.length < 4) {
        alert("성격유형을 모두 입력하세요");
        this.temp_pers = "";
        return;
      }

      this.$emit("confirmInput", this.temp_pers);
    },
  },
};
</script>
