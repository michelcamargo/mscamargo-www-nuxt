<style src="./LocaleSelector.styles.scss"></style>
<template src="./LocaleSelector.template.html"></template>
<script>

  const localeList = {
    'ptBr': {
      id: 0,
      language: 'ptBR',
      icon: null,
      label: 'Português Brasileiro',
      intLabel: 'Brazilian Portuguese'
    },
    'enUS': {
      id: 1,
      language: 'enUS',
      icon: null,
      label: 'English',
      intLabel: 'International'
    }
  }

  const currentLocale = ref(localeList.ptBr);

  const localeSelectHandler = () => {
    if (currentLocale.value.id === localeList.ptBr.id) {
      currentLocale.value = localeList.enUS;
    } else {
      currentLocale.value = localeList.ptBr;
    }
  }

  export default {
    name: 'LocaleSelector',
    data() {
      return {
        locale: currentLocale,
        localeSelectHandler,
      }
    },
  }

</script>
