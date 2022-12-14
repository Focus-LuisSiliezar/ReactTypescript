import create from 'zustand';

export const movieStore = create((set) => ({
    movies: [],
    addMovie: (newMovie: any) => set((state: any) => ({ movies: [...state.movies, newMovie] })),
    removeMovie: (id: any) => set((state: any) => ({ movies: state.movies.filter((movie:any) => movie.id !== id) })),
}));

