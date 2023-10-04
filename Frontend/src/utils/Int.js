import React from 'react'

import { useSetRecoilState } from 'recoil'
import { userState } from '../store/atoms/user'
const Int = () => {
    const setUser = useSetRecoilState(userState)
    const init = async()=>{
      try {
          // const response = await 
        
      } catch (error) {
        console.log(er);
      }
    } 
}

export default Int