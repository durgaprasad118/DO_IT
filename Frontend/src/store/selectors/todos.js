import { selector } from 'recoil'

import { todoState } from '../atoms/todos'

export const todoList = selector({
  key: 'todoList',
  get: ({ get }) => {
    const state = get(todoState)
    return state.todo
  },
})
