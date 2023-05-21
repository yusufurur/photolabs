import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import TopicData from "../mocks/topics.json"

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topics, photoLike } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={topics} photoLike={photoLike} />
    </div>
  )
}

export default TopNavigation;