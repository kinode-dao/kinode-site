import classNames from "classnames"
import useSiteStore from "../../store/siteStorage"
import { isMobileCheck } from "../../utils/dimensions"
import Col from "../spacing/Col"
import Row from "../spacing/Row"
import Text from "../text/Text"
import PostCard from "./PostCard"
import './PostSections.scss'
import Button from "../form/Button"
import { FaArrowRight } from "react-icons/fa6"
import { useState } from "react"
import moment from 'moment'

export const PostSections = () => {
  const { token, posts: unsortedPosts, setPosts } = useSiteStore()
  const isMobile = isMobileCheck()
  const [isViewAll, setIsViewAll] = useState(false)
  const posts = unsortedPosts.sort((a, b) => moment(a.date).isAfter(b.date) ? -1 : 1)

  const postSections = [
    {
      title: 'Top',
      className: 'top',
      posts: posts.slice(0, 3),
      postVariant: 'small'
    },
    {
      title: 'Case Studies',
      className: 'case-studies',
      posts: posts.filter(p => p.tags?.match(/case study/)).slice(0, 2),
      postVariant: 'big'
    },
    // {
    //   title: 'Popular Articles',
    //   className: 'popular',
    //   posts: posts.filter(p => p.tags?.match(/popular/)).slice(0, 2),
    //   postVariant: 'medium',
    // },
    {
      title: 'All Articles',
      className: 'all',
      posts,
      postVariant: 'big',
    },

  ]

  const latestPost = {
    title: 'Latest Post',
    className: 'latest',
    posts: posts.slice(0, 1),
    postVariant: 'big'
  }

  const allPostsSection = {
    title: 'All Articles',
    className: 'all',
    posts,
    postVariant: 'big'
  }

  const sectionFor = (section: typeof postSections[number]) => {
    return <Col className={classNames('section', section.className, { isMobile })}>
      <Row className="section-header">
        <Col>
          <h1>{section.title}</h1>
        </Col>

        {section.className !== 'all' && <Button
          className="clear shb"
          onClick={() => setIsViewAll(!isViewAll)}
        >
          <Text className="mr1">{isViewAll ? 'View blog' : 'View all'}</Text>
          <FaArrowRight />
        </Button>}
      </Row>

      <Row className="section-posts">
        {section.posts.map((post, i) => <PostCard
          key={i}
          post={post}
          variant={section.postVariant as any}
        />)}
      </Row>
    </Col>
  }

  return <Col className={classNames('post-sections', { isMobile })}>
    {!isViewAll && posts.length > 0 && sectionFor(latestPost)}
    {!isViewAll && postSections.map(sectionFor)}
    {isViewAll && sectionFor(allPostsSection)}
  </Col>
}

