import classNames from "classnames"
import { Post } from "../../types/Post"
import Col from "../spacing/Col"
import { isMobileCheck } from "../../utils/dimensions"
import Scroll from 'react-scroll'
import Row from '../spacing/Row'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import useSiteStore from "../../store/siteStorage"
import Button from '../../components/form/Button'
import { marked } from "marked"
import humc from '../../assets/img/kinode.svg'
import { useEffect, useState } from "react"
import './PostPage.scss'
import Loader from "../popups/Loader"

interface PostPageProps {
  post: Post
}

export const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const [postContent, setPostContent] = useState('')
  const isMobile = isMobileCheck()
  const navigate = useNavigate()
  const { token } = useSiteStore()

  useEffect(() => {
    const content = marked(post.content) as string
    setPostContent(content)
  }, [post])

  const onDeletePost = (slug: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      fetch(`/api/blog/posts/${slug}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
        .then(data => {
          console.log({ data })
          alert('Post deleted.')
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
          alert('Something went wrong. Please try again.')
        })
    }
  }

  const onUndeletePost = (slug: string) => {
    if (window.confirm('Are you sure you want to undelete this post?')) {
      fetch(`/api/blog/posts/${slug}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...post, deleted: 0 })
      })
        .then(data => {
          console.log({ data })
          alert('Post undeleted.')
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
          alert('Something went wrong. Please try again.')
        })
    }
  }

  if (!post) {
    navigate('/blog')
    return <></>
  }

  return <Col className={classNames('post post-page', { isMobile })}>
    <Loader images={[post.headerImage, post.thumbnailImage]} />
    <Scroll.Element name='post' />
    <Row className='post-card-content' style={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
      <Col className='shine' />
      <Col className='bg' />
      <Row className='buttons' between>
        {token && <>
          <RouterLink to={`/blog/edit/${post.slug}`} className='button edit'>
            Edit
          </RouterLink>
          {post.deleted === 0 && <Button onClick={() => onDeletePost(post.slug)} className='button delete'>
            Delete
          </Button>}
          {post.deleted === 1 && <Button onClick={() => onUndeletePost(post.slug)} className='button undelete'>
            Undelete
          </Button>}
        </>}
      </Row>
      <Col className='post-deets'>
        <h1>{post.title}</h1>
        <Col className='content' dangerouslySetInnerHTML={{ __html: postContent }} />
      </Col>
    </Row>
    <img className='suffix' src={humc} />
  </Col>
}