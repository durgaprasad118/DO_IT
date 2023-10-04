import axios from 'axios'
import { ErrorToast, Sucesstoast } from './toast'

export const handleLogin = async (
  email,
  password,
  setLoggedIn,
  setEmail,
  setPassword,
) => {
  setLoggedIn(true)
  try {
    const response = await axios.post(
      'https://todo-dp.onrender.com/auth/login',
      {
        username: email,
        password: password,
      },
    )
    const data = response.data
    localStorage.setItem('token', data.token)
    Sucesstoast('LoggedIn Successfully')
    setTimeout(() => {
      window.location.href = '/todos'
    }, 1000)
  } catch (error) {
    ErrorToast(error.response.data.message)
  } finally {
    setLoggedIn(false)
    setPassword('')
    setEmail('')
  }
}




export const signupUser = async (email,name, password, setEmail, setPassword, setSignup) => {
  setSignup(true);
  try {
    const response = await axios.post('https://todo-dp.onrender.com/auth/register', {
      name:name,
      username: email,
      password: password,
    });
    const data = response.data;
    localStorage.setItem('token', data.token);
    Sucesstoast('SignedUp Successfully');
    
      window.location.href="/todos";
   
  } catch (error) {
    ErrorToast(error.response.data.message);

  } finally {
    setEmail('');
    setPassword('');
    setSignup(false);
  }
};