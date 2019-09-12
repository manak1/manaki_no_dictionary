import firebase from '~/plugins/firebase'
import {
  firestoreAction

} from 'vuexfire'
import {
  timingSafeEqual
} from 'crypto';



const db = firebase.firestore();
const formRef = db.collection('dictionary')

export const state = () => ({
  words: []
})



export const actions = {

  init: firestoreAction(({

    bindFirestoreRef
  }) => {
    bindFirestoreRef('dictionary', formRef)
  }),

  add: firestoreAction((context, word, translate) => {
    console.log(typeof word);


    formRef.add({
      word: "test",
      translated: translate
    })
  })



}
