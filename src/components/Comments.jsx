import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCommentsForArticle } from '../utils/api'
import Moment from 'moment'
import Loading from './Loading'
import PostComment from './PostComment'

const Comments = ({ article_id, commentCount }) => {
  const [commentTotal, setCommentTotal] = useState(commentCount)
  const { data, isLoading } = useQuery(['comments', article_id], () =>
    fetchCommentsForArticle(article_id)
  )

  if (isLoading) return <Loading />

  /* TODO: 
    - fix styling to make it look like original Northcoders News.
    - Create a API patch function to be able to add ability to post comment.
    - Create text area for somewhere for comment to be written.
    - Make sure when user types in text area only that part renders when using 
      React dev tools.
    - Make sure when using React-Query to use useMutation hook
      and invalidate queries using correct query key telling React-Query to
      update
  */

  return (
    <div className="comments-container">
      <PostComment
        article_id={article_id}
        commentTotal={commentTotal}
        setCommentTotal={setCommentTotal}
      />
      {data.map(comment => (
        <div key={comment.comment_id} className="comment-container">
          <p className="comment-body">{comment.body}</p>
          <p className="comment-author">
            <span>Posted by</span>: {comment.author}
          </p>
          <p className="comment-votes">
            <span>Votes</span>: {comment.votes}
          </p>
          <p className="comment-created-at">
            <span>Created at</span>:{' '}
            {Moment(comment.created_at).format('MMMM Do YYYY')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Comments

// {
// "comment_id": 376,
// "body": "need to add user context so a user who posted comment can delete their comment",
// "article_id": 33,
// "author": "tickle122",
// "votes": 0,
// "created_at": "2022-10-13T14:01:31.598Z"
// },
