import { userState } from '../atoms/user'
import { selector } from 'recoil'
// only email from atom
export const userNameState = selector({
  key: 'userEmailState',
  get: ({ get }) => {
    const state = get(userState)
    return state.userName
  },
})
