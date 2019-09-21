<template>
  <v-form v-on:submit.prevent="post" class>
    <v-flex class="d-flex pt-10 xs11 lg4 mx-auto">
      <v-text-field
        prepend-icon="mdi-search"
        :elevation="10"
        v-model="word"
        label="気になる単語"
        required
        outlined
        placeholder="好きな英単語を入力してね(/・ω・)/"
      ></v-text-field>

      <!--  <v-btn class="text-center mt-3 ml-4 info primary form__btn" @click="post">検索する！</v-btn> -->
    </v-flex>
  </v-form>
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
      if (this.word == "") {
        alert("入力内容が間違っています！('Д')");
      } else {
        const response = this.$axios
          .$post("https://dictionary--api.glitch.me/word", { word: this.word })
          .then(res => {
            let result = res.split("、");

            let dataSets = {
              word: this.word,
              translated: result[0] + "、" + result[1] + "、" + result[2]
            };

            this.$store.dispatch("form/add", dataSets);
            this.word = "";
          });
        /*    .then(() => {ed
        this.help();
        }); */
      }
    },

    checkValid(result) {},

    help() {
      console.log("test");
    }
  },
  computed: {
    dictionary() {
      return this.$store.state.form.dictionary;
    }
  }
};
</script>


/*
http://public.dejizo.jp/NetDicV09.asmx/SearchDicItemLite?Dic=EJdict&Word=water&Scope=HEADWORD&Match=STARTWITH&Merge=AND&Prof=XHTML&PageSize=20&PageIndex=0 
 */


 <style>
.form {
  max-width: 1000px;
  margin: 0 auto;
}
/* 
::placeholder {
  font-size: 10px;
} */
</style>


