export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostDTO = Omit<Post, 'userId' | 'id'>;

export interface PostsStore {
    posts: Post[];
    setPosts: (posts: Post[]) => void;
    createPost: (post: PostDTO) => void;
    editPost: (post: Post) => void;
    deletePost: (id: number) => void;
}

export interface ModalStore {
    opened: boolean;
    open: () => void;
    close: () => void;
}
