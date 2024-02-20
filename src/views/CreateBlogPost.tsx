import React, { useEffect, useState } from 'react';
import useSiteStore from '../store/siteStorage';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Input from '../components/form/Input';
import Col from '../components/spacing/Col';
import Row from '../components/spacing/Row';
import Button from '../components/form/Button';
import TextArea from '../components/form/TextArea';
import slugify from '../utils/slugify';
import { marked } from 'marked';
import './CreateBlogPost.scss';
import { Post } from '../types/Post';
import Link from '../components/nav/Link';
import moment from 'moment';
import Text from '../components/text/Text';

const BLANK_POST = { title: '', content: '', thumbnailImage: '', headerImage: '', slug: '', date: '' };
const CreateBlogPost = () => {
    const { token, fetchImageFilenames, images } = useSiteStore();
    const nav = useNavigate();
    const { editSlug } = useParams();
    console.log({ editSlug });
    const [post, setPost] = useState<Post>(BLANK_POST);
    const { title, content, thumbnailImage, headerImage, slug, date } = post || BLANK_POST;

    const [markdownContent, setMarkdownContent] = useState('');
    const [previewedPost, setPreviewedPost] = useState<Post | undefined>(undefined);
    const [uploadImagesExpanded, setUploadImagesExpanded] = useState(false);
    const [imageFile, setImageFile] = useState<File | undefined>(undefined);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if (editSlug !== undefined) {
            fetch(`/api/blog/posts/${editSlug}`, {
                headers: {
                    accepts: 'application/json',
                },
            })
                .then((data) => data.json())
                .then((data) => {
                    console.log({ editingPost: data });
                    setPost(data);
                })
                .catch((err) => {
                    console.log(err);
                    alert('Something went wrong trying to edit. Please try again.');
                })
        }
        fetchImageFilenames();
    }, [editSlug]);

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
        setPreviewedPost({
            title,
            content,
            thumbnailImage,
            headerImage,
            slug,
            date,
        })
    }, [content, title, thumbnailImage, headerImage, slug])

    useEffect(() => {
        setPost({ ...post, slug: slugify(title) });
    }, [title])

    const onSubmit = () => {
        fetch(`/api/blog/posts${editSlug ? '/'+editSlug : ''}`, {
            method: editSlug ? 'PUT' : 'POST',
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
                date: date ? +moment(date).toDate() : +moment().toDate(),
            }),
        })
            .then((data) => {
                alert('Post created successfully!');
                nav('/blog');
            })
            .catch((err) => {
                console.log(err);
                alert('Something went wrong. Please try again.');
            })
    };

    const onUploadImage = async () => {
        if (!imageFile) return;
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', imageFile);
        const resp = await fetch(`/api/blog/images`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        })

        if (resp.status === 201) {
            alert('Image uploaded successfully!');
            setIsUploading(false);
            fetchImageFilenames();
            setImageFile(undefined);
        } else {
            alert('Something went wrong. Please try again.');
            setIsUploading(false);
        }
    }

    return (
        <Col className='create-blog-post-container'>
            <Button className='back' onClick={() => nav('/blog')}>
                <FaArrowLeft style={{ fontSize: 16 }} />    Back to Blog
            </Button>
            <Row className='create-blog-post'>
                <Col className='post-in-progress'>
                    <Row className='header'>
                        <h1 className='title'>{editSlug ? 'Edit' : 'Create'} Post</h1>
                    </Row>
                    <Col className='form'>
                        <Input
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setPost({ ...post, title: e.target.value })}
                        />
                        <TextArea
                            placeholder='Content'
                            value={content}
                            onChange={(e) => setPost({ ...post, content: e.target.value })}
                        />
                        <Input
                            placeholder='Thumbnail Image'
                            value={thumbnailImage}
                            onChange={(e) => setPost({ ...post, thumbnailImage: e.target.value })}
                        />
                        <Input
                            placeholder='Header Image'
                            value={headerImage}
                            onChange={(e) => setPost({ ...post, headerImage: e.target.value })}
                        />
                        <Col style={{ padding: 16 }}>
                            <Row onClick={() => setUploadImagesExpanded(!uploadImagesExpanded)} style={{ cursor: 'pointer' }}>
                                {uploadImagesExpanded && <FaChevronDown />}
                                {!uploadImagesExpanded && <FaChevronRight />}
                                <Text>Upload Images</Text>
                            </Row>                        
                            {uploadImagesExpanded && <Col className='upload-images-container'>
                                <input type='file' onChange={(e) => {console.log(e.target.files?.[0]); setImageFile(e.target.files?.[0])}} />
                                <Button onClick={onUploadImage} disabled={isUploading || !imageFile}>Upload</Button>
                                <Text className='mt1 mb1'>Uploaded images (click to add):</Text>
                                <Row className='images-to-click'>
                                    {images.filter(i => i).map((image) => <img 
                                        src={`/images/${image}`} 
                                        className='uploaded-image' 
                                        onClick={() => setPost({ ...post, content: `${content}\n<img src="/images/${image}" />` })}
                                    />)}
                                </Row>
                            </Col>}
                        </Col>
                        <Input
                            type='datetime-local'
                            placeholder='Date'
                            value={moment(date).format('YYYY-MM-DDTHH:mm')}
                            onChange={(e) => setPost({ ...post, date: e.target.value })}
                        />
                        <Input
                            placeholder='Slug'
                            value={slug}
                            readOnly
                        />
                        <Col className='actions'>
                            <Button className='submit' onClick={onSubmit}>
                                {editSlug ? 'SAVE' : 'CREATE'} POST <FaArrowRight style={{ fontSize: 16 }} />
                            </Button>
                            <Button className='reset' onClick={() => {
                                if (!window.confirm('Are you sure you want to clear all fields?')) return;
                                setPost(BLANK_POST)
                            }}>
                                CLEAR DATA
                            </Button>
                            <Link target='_blank' className='preview button'
                                href={`/blog/preview/${encodeURIComponent(JSON.stringify(previewedPost))}`}
                            >
                                PREVIEW
                            </Link>
                        </Col>
                    </Col>
                </Col>
                <Col className='preview-container'>
                    <h1 className='title'>Preview</h1>
                    {thumbnailImage && <h2 className='thumbnail'> Thumbnail: <img src={thumbnailImage} /></h2>}
                    {headerImage && <h2 className='header-image'> Header: <img src={headerImage} /></h2>}
                    <div className='preview-post' dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
                </Col>
            </Row>
        </Col>
    );
}

export default CreateBlogPost