import { useEffect } from 'react'

const Redirect: React.FC<{ to: string }> = ({ to }) => {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return <></>
}

export default Redirect