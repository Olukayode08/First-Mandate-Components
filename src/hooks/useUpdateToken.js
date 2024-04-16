import { useCookies } from 'react-cookie'

export const useUpdateToken = () => {
  const [_, setCookie] = useCookies(['token'])

  return (data) => {
    setCookie('token', data.data.authorization.token, {
      path: '/',
      sameSite: 'lax',
      secure: true,
    })
  }
}
