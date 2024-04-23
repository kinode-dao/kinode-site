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

export const PostSections = () => {
  const { token, posts, setPosts } = useSiteStore()
  const isMobile = isMobileCheck()

  return <Col className={classNames('post-sections', { isMobile })}>
    {posts.length > 0 && <PostCard variant="big" post={posts.slice(-1)[0]} />}
    <Col className="section popular">
      <Row className="section-header">
        <Col>
          <h2>
            Popular Articles
          </h2>
          <Text>We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</Text>
        </Col>

        <Button className="clear shb">
          <Text className="mr1">View all</Text>
          <FaArrowRight />
        </Button>
      </Row>
      <Row className="section-posts">
        {posts.slice(0, 2).map((post, i) => <PostCard key={i} post={post} />)}
      </Row>
    </Col>
    <Col className="section recent">
      <Row className="section-header">
        <Col>
          <h2>
            Recent Articles
          </h2>
          <Text>Here's what we've been up to recently.</Text>
        </Col>

        <Button className="clear shb">
          <Text className="mr1">View all</Text>
          <FaArrowRight />
        </Button>
      </Row>
      <Row className="section-posts">
        {posts.slice(0, 3).map((post, i) => <PostCard
          variant="small"
          key={i}
          post={post}
        />)}
      </Row>
    </Col>
    <Col className="section case-studies">
      <Row className="section-header">
        <Col>
          <h2>
            Case Studies
          </h2>
          <Text>Here's a glimpse into our recent investigations</Text>
        </Col>

        <Button className="clear shb">
          <Text className="mr1">View all</Text>
          <FaArrowRight />
        </Button>
      </Row>
      <Row className="section-posts">
        {posts.slice(0, 1).map((post, i) => <PostCard variant='big' key={i} post={post} />)}
      </Row>
    </Col>
  </Col>
}

