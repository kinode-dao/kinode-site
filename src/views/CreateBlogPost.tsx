import React, { useEffect, useState } from 'react';
import useSiteStore from '../store/siteStorage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Input from '../components/form/Input';
import Col from '../components/spacing/Col';
import Row from '../components/spacing/Row';
import Button from '../components/form/Button';
import TextArea from '../components/form/TextArea';
import slugify from '../utils/slugify';
import { marked } from 'marked';
import './CreateBlogPost.scss';

const CreateBlogPost = () => {
    const { token } = useSiteStore();
    const nav = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState('https://uqbar.network/logo192.png');
    const [headerImage, setHeaderImage] = useState('https://uqbar.network/logo192.png');
    const [slug, setSlug] = useState('');
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (!token) {
            alert('Please log in.')
            nav('/blog/login');
        }
    }, [token, title, content, thumbnailImage, headerImage, slug]);

    useEffect(() => {
        const mc = marked(`
<h1>${title}</h1>
${content}`
) as string;
        console.log({ mc })
        setMarkdownContent(mc);
    }, [content, title, thumbnailImage, headerImage, slug])

    useEffect(() => {
        setSlug(slugify(title));
    }, [title])

    const onSubmit = () => {
        fetch('/api/blog/posts', {
            method: 'POST',
            headers: {
                accepts: 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                title,
                content,
                thumbnailImage,
                headerImage,
                slug,
            }),
        })
            .then((data) => data.json())
            .then((data) => {
                if (data?.success) {
                    alert('Post created successfully!');
                } else {
                    alert('Something went wrong. Please try again.');
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Something went wrong. Please try again.');
            })
    };

    return (
        <Col className='create-blog-post-container'>
            <Button className='back' onClick={() => nav('/blog')}>
                <FaArrowLeft style={{ fontSize: 16 }} />    Back to Blog
            </Button>
            <Row className='create-blog-post'>
                <Col className='post-in-progress'>
                    <Row className='header'>
                        <h1 className='title'>Create Post</h1>
                    </Row>
                    <Col className='form'>
                        <Input
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextArea
                            placeholder='Content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Input
                            placeholder='Thumbnail Image'
                            value={thumbnailImage}
                            onChange={(e) => setThumbnailImage(e.target.value)}
                        />
                        <Input
                            placeholder='Header Image'
                            value={headerImage}
                            onChange={(e) => setHeaderImage(e.target.value)}
                        />
                        <Input
                            placeholder='Slug'
                            value={slug}
                            readOnly
                        />
                        <Button className='submit' onClick={onSubmit}>
                            Create Post <FaArrowRight style={{ fontSize: 16 }} />
                        </Button>
                        <Button className='reset' onClick={() => {
                            if (!window.confirm('Are you sure you want to clear all fields?')) return;
                            setTitle('');
                            setContent('');
                            setThumbnailImage('');
                            setHeaderImage('');
                            setSlug('');
                        }}>
                            Clear
                        </Button>
                    </Col>
                </Col>
                <Col className='preview-container'>
                    <h1 className='title'>Preview</h1>
                    <Row>
                        <h2 className='thumbnail'> Thumbnail: <img src={thumbnailImage} /></h2>
                    </Row>
                    <Row>
                        <h2 className='header-image'> Header: <img src={headerImage} /></h2>
                    </Row>
                    <div className='preview-post' dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
                </Col>
            </Row>
        </Col>
    );
}

export default CreateBlogPost