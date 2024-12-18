import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeContext } from 'src/providers'

const POSITION = 'top-right'
const CLOSE = 3000

export const Toast = () => {
  const { theme } = useContext(ThemeContext)

  return <ToastContainer position={POSITION} autoClose={CLOSE} theme={theme} />
}
