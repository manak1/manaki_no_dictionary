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

    <v-app-bar app color="blue darken-3" dark>
      <v-app-bar-nav-icon right @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>絶対！！英単語覚えるくん(｀・ω・´)</v-toolbar-title>
    </v-app-bar>
    <main class="main">
      <AboutHeading></AboutHeading>
    </main>
  </v-app>
</template>


<script>
import Forms from "~/components/Forms.vue";
import Table from "~/components/Table.vue";
import axios from "axios";
import AboutHeading from "~/components/About-Heading.vue";

export default {
  components: { Forms, Table, AboutHeading },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "href:https://fonts.googleapis.com/css?family=Sawarabi+Mincho"
      }
    ]
  },

  data: function() {
    return {
      name: "test",
      done: false,
      drawer: false
    };
  },

  methods: {
    add() {
      console.log("wassa");
    }
  }
};
</script>




