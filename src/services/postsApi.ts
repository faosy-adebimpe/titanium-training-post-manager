import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import type { Post } from '../types';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export default postsApi;

export const getPosts = async () => {
    const { data } = await axios.get(`${API_URL}/5`);
    return data;
};

export const usePosts = (limit: number) => {
    return useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await axios.get<Post[]>(
                `${API_URL}?_limit=${limit}`
            );
            return data;
        },
    });
};

export const useInfinitePosts = (limit: number) => {
    return useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', limit],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await axios.get<Post[]>(
                `${API_URL}?_limit=${limit}&_page=${pageParam}`
            );
            return data;
        },
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            return allPages.length + 1;
        },
    });
};

export const usePaginatedPosts = (page: number, limit: number) => {
    return useQuery<Post[]>({
        queryKey: ['posts', page, limit],
        queryFn: async () => {
            const { data } = await axios.get<Post[]>(
                `${API_URL}?_limit=${limit}&_page=${page}`
            );
            return data;
        },
    });
};

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation<Post, Error, Omit<Post, 'id'>>({
        mutationFn: async (newPost) => {
            const { data } = await axios.post<Post>(API_URL, newPost);
            return data;
        },
        onSuccess: (newPost) => {
            queryClient.setQueryData<Post[]>(['posts'], (old = []) => [
                ...old,
                { ...newPost, id: Math.random() * 10000 },
            ]);
        },
    });
};

export const useDeletePost = () => {
    const queryClient = useQueryClient();

    return useMutation<number, Error, number>({
        mutationFn: async (id) => {
            await axios.delete(`${API_URL}/${id}`);
            return id;
        },
        onSuccess: (id) => {
            queryClient.setQueryData<Post[]>(['posts'], (old = []) =>
                old.filter((p) => p.id !== id)
            );
        },
    });
};

export const useUpdatePost = () => {
    const queryClient = useQueryClient();

    return useMutation<Post, Error, Post>({
        mutationFn: async (updatedPost) => {
            const { data } = await axios.put<Post>(
                `${API_URL}/${updatedPost.id}`
            );
            return data;
        },
        onSuccess: (updatedPost) => {
            queryClient.setQueryData<Post[]>(['post'], (old = []) =>
                old.map((p) => (p.id === updatedPost.id ? updatedPost : p))
            );
        },
    });
};
