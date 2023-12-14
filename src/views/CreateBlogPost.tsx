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
    const [thumbnailImage, setThumbnailImage] = useState('https://private-user-images.githubusercontent.com/10970247/290656866-15c6c9d0-9a72-442d-acc0-a6e830127c98.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI1ODg0MTIsIm5iZiI6MTcwMjU4ODExMiwicGF0aCI6Ii8xMDk3MDI0Ny8yOTA2NTY4NjYtMTVjNmM5ZDAtOWE3Mi00NDJkLWFjYzAtYTZlODMwMTI3Yzk4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE0VDIxMDgzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIwYzg5OTZmMjQyMzIwNTViYjI5NjJkYzVjOTAxYzAyYjJlMDI5MDc5OTA3MzBkNDIwODRiZTIyZDgyODA3NzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.wy2xGk-P9CeavU6-VLnIAkJCXQIm-E_-dAZzMoE_HZQ');
    const [headerImage, setHeaderImage] = useState('https://private-user-images.githubusercontent.com/10970247/290656811-cc08fd40-5bf4-49a6-9c9c-a8722736e25f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI1ODg0MTIsIm5iZiI6MTcwMjU4ODExMiwicGF0aCI6Ii8xMDk3MDI0Ny8yOTA2NTY4MTEtY2MwOGZkNDAtNWJmNC00OWE2LTljOWMtYTg3MjI3MzZlMjVmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE0VDIxMDgzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWExZTdiZTYxOGFhMzMyZTU1YzFiZDUzMWExNjQ5N2RiZDNmZDZkNDgzNzZhMDQyMTJhZTEzYjY0YzllMDUzODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.WsnWsHbbe2qc-blkOzVmp6_VCe2TCagehRvFgCzNPw4');
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
                Back <FaArrowLeft style={{ fontSize: 16 }} />
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
                            onChange={(e) => setSlug(e.target.value)}
                        />
                        <Button className='submit' onClick={onSubmit}>
                            Create Post <FaArrowRight style={{ fontSize: 16 }} />
                        </Button>
                    </Col>
                </Col>
                <Col className='preview'>
                    <Row className='header'>
                        <h1 className='title'>Preview</h1>
                    </Row>
                    <Row>
                        <h2> Thumbnail: <img src={thumbnailImage} /></h2>
                    </Row>
                    <Row>
                        <h2> Header: <img src={headerImage} /></h2>
                    </Row>
                    <div className='preview-post' dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
                </Col>
            </Row>
        </Col>
    );
}

export default CreateBlogPost