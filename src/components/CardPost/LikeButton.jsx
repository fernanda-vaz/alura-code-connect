'use client'

import { useFormStatus } from 'react-dom'
import { IconButton } from '../IconButton'
import { ThumbsUp } from '../icons/ThumbsUp'
import { Spinner } from '../Spinner'

export const LikeButton = () => {
  const { pending } = useFormStatus()

  return (
    <IconButton disabed={pending}>
      {pending ? <Spinner /> : <ThumbsUp />}
    </IconButton>
  )
}
