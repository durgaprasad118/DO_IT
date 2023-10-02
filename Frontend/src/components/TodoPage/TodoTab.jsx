import React, { useState } from 'react'
import Content from './Content'
const TodoTab = () => {
  const [activeTab, setActiveTab] = useState('todo')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="tabs tab-lg tabs-boxed rounded-none rounded-t-lg">
        <a
          className={`tab tab-lg ${activeTab === 'todo' && 'tab-active'}`}
          onClick={() => handleTabClick('todo')}
        >
          ToDo
        </a>
        <a
          className={`tab tab-lg ${activeTab === 'completed' && 'tab-active'}`}
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
