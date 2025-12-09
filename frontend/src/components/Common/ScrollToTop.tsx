import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset window scroll to top on every pathname change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
//comment 