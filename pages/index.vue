<template>
  <div id="main " class="main">
    <div class="main__wrapper">
      <h1 class="main__title">Manaki no Dictionary</h1>
      <p class="main__txt">
        Welcome to the manaki no dictionary (･ω･｡)ﾉ
        <br />This is a website I made to make my life easier.
      </p>

      <Forms></Forms>
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Forms from "~/components/Forms.vue";
import Table from "~/components/Table.vue";
import axios from "axios";
export default {
  components: { Forms, Table },
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
      },

      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }
    ]
  },

  data: function() {
    return {
      name: "test",
      done: false
    };
  },

  methods: {
    add() {
      console.log("wassa");
    }
  }
};
</script>


