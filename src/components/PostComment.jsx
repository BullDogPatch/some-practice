import { useState } from 'react'
import { postComment } from '../utils/api'

const PostComment = ({ article_id, commentTotal, setCommentTotal }) => {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }
  /* needs a form with label, div and textarea. import postComment function from api */
  return (
    <form>
      <textarea value={text} onChange={handleChange} cols="5"></textarea>
    </form>
  )
}

export default PostComment
