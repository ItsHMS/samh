export default defineNuxtPlugin(() => {
    const { $i18n } = useNuxtApp()
  
    const updateDirection = (locale: string) => {
      const direction = locale === 'ar' ? 'rtl' : 'ltr'
      if (import.meta.client) {
        document.documentElement.dir = direction
        document.body.dir = direction
      }
    }
  
    console.log('Initial locale:', $i18n.locale.value)
  
    if (import.meta.client) {
      watch(
        () => $i18n.locale.value,
        updateDirection,
        { immediate: true }
      )
    }
  })