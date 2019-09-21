<template >
  <v-flex class="xs11 md8 lg6 mx-auto">
    <v-card class="dark mx-auto mt-10">
      <v-simple-table :elavation="3">
        <thead>
          <tr>
            <th class="text-left">単語</th>
            <th class="text-left">意味</th>
            <th class="text-center">削除</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="word in dictionary" :key="word.id">
            <td>{{word.word}}</td>
            <td class="text-left">{{word.translated}}</td>
            <td>
              <v-btn class="text-center" text-center @click="remove(word.id)">X</v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  methods: {
    remove(id) {
      this.$store.dispatch("form/remove", id);
    }
  },
  computed: {
    dictionary() {
      return this.$store.state.form.dictionary;
    }
  }
};
</script>


