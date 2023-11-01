import React, { useState } from 'react'
import Content from './Content'
const TodoTab = () => {
  const [activeTab, setActiveTab] = useState('todo')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="tabs  tabs-boxed ">
        <a
          className={`tab   ${activeTab === 'todo' && 'tab-active'}`}
          onClick={() => handleTabClick('todo')}
        >
          ToDo
        </a>
        <a
          className={`tab  ${activeTab === 'completed' && 'tab-active'}`}
          onClick={() => handleTabClick('completed')}
        >
          Completed
        </a>
      </div>
      <Content active={activeTab}></Content>
    </div>
  )
}

export default TodoTab
