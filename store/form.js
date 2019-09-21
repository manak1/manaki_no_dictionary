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
  dictionary: []
})

export const actions = {

  init: firestoreAction(({

    bindFirestoreRef
  }) => {
    bindFirestoreRef('dictionary', formRef)
  }),

  add: firestoreAction((context, wordData) => {

    formRef.add({
      word: wordData.word,
      translated: wordData.translated
    })
  }),

  remove: firestoreAction((context, id) => {
    formRef.doc(id).delete()
  })



}
