import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const [_, setCookie] = useCookies(['token'])
  const navigate = useNavigate()

  return () => {
    setCookie('token', '', {
      path: '/',
      sameSite: 'lax',
      secure: true,
    })

    navigate('/login')
  }
}
