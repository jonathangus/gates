import create from 'zustand';

export const useUserStore = create((set) => ({
  githubToken: '',
  setGithubAuth: (githubToken: string) => set((state) => ({ githubToken })),
}));
