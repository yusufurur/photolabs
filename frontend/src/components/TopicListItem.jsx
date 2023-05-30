import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  return (
    <div className="topic-list--item" onClick={() => props.handleTopicChange(props.id)}>
      {props.label}
    </div>
  );
}

export default TopicListItem;