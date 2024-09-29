export function useScreen() {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const isPhone = () => width.value < 640
  const isTablet = () => width.value >= 640 && width.value < 1024
  const isDesktop = () => width.value >= 1024

  return {
    width,
    isPhone,
    isTablet,
    isDesktop
  }
}