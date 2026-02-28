import { ref, onMounted } from 'vue'

// Read initial theme from DOM (set by inline script in index.html before Vue mounts)
const initialTheme = typeof document !== 'undefined'
  ? (document.documentElement.getAttribute('data-theme') || 'dark')
  : 'dark'
const theme = ref(initialTheme)

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
    }
    // else keep whatever was set by the inline script (default: dark)
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
