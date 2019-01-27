<template>
  <main class='test'>
    <ContactForm></ContactForm>
  </main>
</template>

<script>
import ContactForm from '@/components/templates/ContactForm'

export default {
  components: {
    ContactForm
  },
  // beforeCreate: function () {
  //   document.querySelector('body').classList.add('bg-dark')
  // },
  // destroyed: function () {
  //   document.querySelector('body').classList.remove('bg-dark')
  // }
}
</script>
