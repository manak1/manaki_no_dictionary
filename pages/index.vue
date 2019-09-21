<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue darken-3" :hide-on-scroll="true" dark>
      <v-app-bar-nav-icon right @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>絶対！！英単語覚えるくん(｀・ω・´)</v-toolbar-title>
    </v-app-bar>
    <main class="main">
      <h2>ようこそ！</h2>
      <p>
        絶対英単語覚えるくんは、英単語を検索→登録→出題してくれるアプリだよ！
        <br />英語の課題やレポートなど勉強のおともに使ってね(^O^)
      </p>
      <a href>詳しい使い方を見る</a>
      <Forms></Forms>
      <Table></Table>
      <Footer></Footer>
    </main>
  </v-app>
</template>
<style>
</style>
<script>
import Forms from "~/components/Forms.vue";
import Table from "~/components/Table.vue";
import axios from "axios";
import Footer from "~/components/Footer.vue";

export default {
  components: { Forms, Table, Footer },
  head: {
    link: [{}]
  },

  data: function() {
    return {
      name: "test",
      done: false,
      drawer: false,
      extended: true
    };
  },

  methods: {
    add() {
      console.log("wassa");
    }
  }
};
</script>





