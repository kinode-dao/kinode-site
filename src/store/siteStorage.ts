import { create } from 'zustand';


interface SiteStore {
    token: string;
    setToken: (token: string) => void;
    get: () => SiteStore;
    set: (state: Partial<SiteStore>) => void;
}
const useSiteStore = create<SiteStore>()(
    (set, get) => ({
    token: '',
    setToken: (token: string) => set({ token }),
    set,
    get,
}));

export default useSiteStore