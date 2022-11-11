import React from 'react'
import styles from './Hit.module.css'
import PropTypes from 'prop-types'



const Hit = ({title,points,by,comments,url}) => {
  const [jobs, setJobs] = React.useState([]);

  const deleteTodo = (index) => {
    alert(index)
    const newJobs = jobs;
    newJobs.splice(index, 1);
    setJobs([...jobs]);
}
  return (
    <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{points} by {by} | {comments} comments</div>
        <div>
            <a href={url} className={styles.readmore}>Readmore</a>
            <a href="" className={styles.remove} onClick={() => deleteTodo(index)}>Remove</a>
        </div>
    </div>
  )
}

export const HitType = PropTypes.shape({
    objectId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
    comment: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
})

export default Hit