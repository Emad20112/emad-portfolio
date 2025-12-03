import { ref, onMounted } from 'vue'

const theme = ref('dark')

const applyTheme = (value) => {
  theme.value = value
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem('theme', value)
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved)
    } else {
      applyTheme('dark')
    }
  })

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    toggleTheme,
    setTheme: applyTheme,
  }
}
