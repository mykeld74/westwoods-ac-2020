import { useState, useMemo } from 'react'

export const useToggleCart = initial => {
  const [isToggled, setIsToggled] = useState(initial)
  const toggle = id => setIsToggled(prevState => !prevState)
  const bind = useMemo(() => {
    return {
      onClick: toggle,
    }
  }, [])
  return { isToggled, setIsToggled, toggle, bind }
}
