import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearUserData } from '../redux/userSlice'

export const useLogout = () => {
  const [_, setCookie] = useCookies(['token'])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return () => {
    setCookie('token', '', {
      path: '/',
      sameSite: 'lax',
      secure: true,
    })
    dispatch(clearUserData())

    navigate('/login')
  }
}
