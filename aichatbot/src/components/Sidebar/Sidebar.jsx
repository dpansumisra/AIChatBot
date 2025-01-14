import React,{useState} from 'react'
import "./Sidebar.css"
import {assets} from '../../assets/assets'

const Sidebar = () => {
    const [expandSidebar, setexpandSidebar] = useState(false);


  return (
    <div className='sidebar'>
      <div className="top">
          <img onClick={()=>setexpandSidebar(previousValue=>!previousValue)} className='menu' src={assets.menu_icon} alt="" />
          <div className="new-chat">
              <img src={assets.plus_icon} alt="" />
              {expandSidebar?<p>New Chat</p>:null}
          </div>
          {expandSidebar?
          <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>What is React ...</p>
              </div>
          </div>
:null}
      </div>
      <div className="bottom">
          <div className="bottom-item recent-entry">
              <img src={assets.question_icon} alt="" />
              {expandSidebar?<p>Help</p>:null}
          </div>
          <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt="" />
              {expandSidebar?<p>Activity</p>:null}
          </div>
          <div className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt="" />
              {expandSidebar?<p>Setting</p>:null}
          </div>
      </div>

    </div>
  )
}

export default Sidebar;
