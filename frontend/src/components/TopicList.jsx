import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const { topics, photoLike, handleTopicChange } = props;

  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      label={topic.title}
      link={topic.slug}
      handleTopicChange={(topicLabel) => handleTopicChange(topicLabel)}
    />
  ));

  return (
    <div className="top-nav-bar--topic-list">
      {topicItems}
      &nbsp;&nbsp;&nbsp;
      <FavBadge isFavPhotoExist={photoLike.length > 0 ? true : false} />
    </div>
  );
}

export default TopicList;