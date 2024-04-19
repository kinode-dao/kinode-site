import { create } from 'zustand';
import { Post } from '../types/Post';

interface SiteStore {
    token: string;
    setToken: (token: string) => void;
    get: () => SiteStore;
    set: (state: Partial<SiteStore>) => void;
    fetchImageFilenames: () => void;
    images: string[];
    setImages: (images: string[]) => void;
    posts: Post[]
    setPosts: (posts: Post[]) => void
    ourPost: Post | undefined
    setOurPost: (post: Post | undefined) => void
}
const useSiteStore = create<SiteStore>()(
    (set, get) => ({
        token: '',
        setToken: (token: string) => token && set({ token }),
        set,
        get,
        fetchImageFilenames: async () => {
            const images = await fetch('/api/blog/images').then((data) => data.json());
            set({ images });
        },
        images: [],
        setImages: (images: string[]) => set({ images }),
        posts: [],
        setPosts: (posts: Post[]) => set({ posts }),
        ourPost: undefined,
        setOurPost: (post: Post | undefined) => set({ ourPost: post })
    }));

export default useSiteStore