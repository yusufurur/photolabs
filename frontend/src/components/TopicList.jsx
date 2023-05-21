import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const { topics, photoLike } = props;

  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      label={topic.title}
      link={topic.slug}
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

// TopicList.defaultProps = {
//   topics: [
//     {
//       id: 1,
//       label: 'Nature',
//       link: 'link placeholder' 
//     },
//     { 
//       id: 2, 
//       label: 'Food',
//       link: 'link placeholder' 
//     },
//     {
//       id: 3,
//       label: 'People',
//       link: 'link placeholder' 
//     },
//   ]
// }

export default TopicList;