import create from 'zustand';


export const movieStore = create((set) => ({
    movies: [],
    addMovie: (newMovie:any) => set((state: any) => ({ movies:[...state.movies, newMovie] })),

}));
