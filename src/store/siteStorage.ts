import { create } from 'zustand';


interface SiteStore {
    token: string;
    setToken: (token: string) => void;
    get: () => SiteStore;
    set: (state: Partial<SiteStore>) => void;
    fetchImageFilenames: () => void;
    images: string[];
    setImages: (images: string[]) => void;
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
}));

export default useSiteStore