import useSiteStore from "../../store/siteStorage"
import Col from "../spacing/Col"
import Row from "../spacing/Row"
import Text from "../text/Text"
import PostCard from "./PostCard"
import './PostSections.scss'

export const PostSections = () => {
  const { token, posts, setPosts } = useSiteStore()

  return <Col className='post-sections'>
    {posts.length > 0 && <PostCard big post={posts.slice(-1)[0]} />}
    <Col className="section popular">
      <Row>
        <Col>
          <h2>
            Popular Articles
          </h2>
          <Text>We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</Text>
        </Col>
      </Row>
    </Col>
    <Col className="section recent">
      <Row>
        <Col>
          <h2>
            Recent Articles
          </h2>
          <Text>Here's what we've been up to recently.</Text>
        </Col>
      </Row>
    </Col>
    <Col className="section case-studies">
      <Row>
        <Col>
          <h2>
            Case Studies
          </h2>
          <Text>Here's a glimpse into our recent investigations</Text>
        </Col>
      </Row>
    </Col>
    <Col className="section all">
      <Row>
        <Col>
          <h2>
            All Articles
          </h2>
          <Text>Explore our latest posts: Here's what we've been sharing.</Text>
        </Col>
      </Row>
    </Col>
  </Col>
}

