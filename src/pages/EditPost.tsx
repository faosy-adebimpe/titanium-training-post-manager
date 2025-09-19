import { useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import postsApi, { useUpdatePost } from '../services/postsApi';
import type { Post } from '../types';
import useSnackbar from '../hooks/useSnackbar';

const EditPost = () => {
    const { mutateAsync: updatePost, isPending: isUpdating } = useUpdatePost();
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const getPost = useCallback(async () => {
        try {
            const response = await postsApi.get(`/${id}`);
            const data: Post = response.data;
            const { title, body } = data;
            setPost(data);
            setTitle(title);
            setBody(body);
        } catch (error) {
            console.log({ error });
        }
    }, [id]);

    useEffect(() => {
        getPost();
    }, [getPost]);

    const { SnackbarComponent, setOpen } = useSnackbar();
    return (
        <div>
            <SnackbarComponent
                message="Post edited successfully"
                duration={3000}
            />
            <div className="bg-white  mx-auto w-sm p-5 py-16 rounded-md flex flex-col gap-3 justify-center items-center relative">
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    size="small"
                    sx={{ width: '100%' }}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Body"
                    variant="outlined"
                    rows={3}
                    multiline
                    sx={{ width: '100%' }}
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
                <div className="w-full flex items-center gap-3 mt-3 justify-end">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        }}
                        disabled={isUpdating}
                        onClick={async () => {
                            if (!post) return;
                            await updatePost({ ...post, title, body });
                            setOpen(true);
                        }}
                    >
                        {isUpdating ? 'EDITING...' : 'EDIT POST'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
