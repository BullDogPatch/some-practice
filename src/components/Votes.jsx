import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { patchArticleById } from '../utils/api'

const Votes = ({ article_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0)
  const [error, setError] = useState(false)

  const handleVoteChange = vote => {
    setVoteChange(curr => curr + vote)
    patchArticleById(article_id, vote).catch(err => {
      setVoteChange(curr => curr - vote)
      setError(true)
    })
  }

  return (
    <div className="votes">
      <p>
        Votes: <span>{votes + voteChange}</span>
      </p>
      <button
        disabled={voteChange === 1}
        style={voteChange === 1 ? { color: 'green' } : null}
        className="vote-btn"
        onClick={() => handleVoteChange(1)}
      >
        Upvote
      </button>
      <button
        disabled={voteChange === -1}
        style={voteChange === -1 ? { color: 'red' } : null}
        className="vote-btn"
        onClick={() => handleVoteChange(-1)}
      >
        Downvote
      </button>
    </div>
  )
}

export default Votes
