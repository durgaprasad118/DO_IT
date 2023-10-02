import { atom } from 'recoil'

export const todoListState = atom({
  key: 'TodoList',
  default: [],
})

export const userName = atom({
  key: 'name',
  default: '',
})
