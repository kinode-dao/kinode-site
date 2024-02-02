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
    setToken: (token: string) => token && set({ token }),
    set,
    get,
}));

export default useSiteStore