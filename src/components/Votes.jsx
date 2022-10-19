import { useMutation } from '@tanstack/react-query'
import { patchArticleById } from '../utils/api'

const Votes = ({ article }) => {
  const { mutate } = useMutation(patchArticleById, {
    onSuccess: () => {
      console.log('Success')
    },
    onError: () => {
      console.log('Error')
    },
  })

  const handleVote = vote => {
    mutate({ articleById: article.article_id, inc_votes: vote })
  }

  return (
    <div className="votes">
      <button onClick={() => handleVote(1)}>Upvote</button>
      <p>Votes: {article.votes}</p>
      <button onClick={() => handleVote(-1)}>Downvote</button>
    </div>
  )
}

export default Votes
