import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { patchArticleById } from '../utils/api'

const Vote = ({ article }) => {
  //   PATCH /api/articles/:article_id
  // Example Request
  // { inc_votes: 1 }
  const [voteChange, setVoteChange] = useState(0)
  const { mutate } = useMutation(
    ['patchArticleById', article.article_id],
    () => patchArticleById(article.article_id, 1),
    {
      onSuccess: () => {
        setVoteChange(curr => curr + 1)
      },
      onError: () => {
        setVoteChange(curr => curr - 1)
      },
    }
  )

  const handleVoteChange = () => {
    mutate()
  }

  return (
    <div className="votes">
      <p>Votes: {article.votes + voteChange}</p>
      <button
        disabled={voteChange === 1}
        className="vote-btn"
        onClick={handleVoteChange}
      >
        Upvote
      </button>
    </div>
  )
}

export default Vote
