<template>
  <form class="form" v-on:submit.prevent="post">
    <input
      v-model="word"
      class="form__input"
      type="text"
      id="word"
      name="word"
      placeholder="Type any word here"
      onforcus="this.value = ''"
      style="
      text-align:center"
    />
    <button class="form__btn">search!</button>
  </form>
</template>

<script>
import vueResource from "vue-resource";
import Vue from "vue";
Vue.use(vueResource);

URL =
  "http://public.dejizo.jp/NetDicV09.asmx/GetDicItemLite?Dic=EJdict&Item=045117&Loc=&Prof=XHTML ";

export default {
  data: function() {
    return {
      word: "",
      definition: ""
    };
  },

  created: function() {
    this.$store.dispatch("form/init");
  },

  methods: {
    search() {
      console.log(this.word, "Im going to search for this word!");
      const response = this.$axios
        .$get("https://dictionary--api.glitch.me/get")
        .then(res => {
          console.log(res);
        });
    },

    post() {
      let data = {
        key: this.word
      };

      console.log(data);
      const response = this.$axios
        .$post("https://dictionary--api.glitch.me/word", { word: this.word })
        .then(res => {
          this.definition = res;
          console.log(typeof this.definition);
          this.$store.dispatch("form/add", this.word, this.definition);
          this.word = "";
        });
      /*    .then(() => {
          this.help();
        }); */
    },

    help() {
      console.log("test");
    }
  }
};
</script>


/*
http://public.dejizo.jp/NetDicV09.asmx/SearchDicItemLite?Dic=EJdict&Word=water&Scope=HEADWORD&Match=STARTWITH&Merge=AND&Prof=XHTML&PageSize=20&PageIndex=0 
 */