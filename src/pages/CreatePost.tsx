import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useCreatePost } from '../services/postsApi';
import { generateId } from '../utils/generate-id';
import { useNavigate } from 'react-router-dom';
import useSnackbar from '../hooks/useSnackbar';

const CreatePost = () => {
    const navigate = useNavigate();
    const { mutateAsync: createPost, isPending: isCreating } = useCreatePost();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('Post created successfully');

    const create = async () => {
        if (!title || !body) {
            setOpen(true);
            return setMessage('All fields are required');
        }

        setMessage('All fields are required');

        await createPost({
            userId: generateId(),
            title,
            body,
        });
        setOpen(true);
        navigate('/');
    };

    const { SnackbarComponent, setOpen } = useSnackbar();

    return (
        <div>
            <SnackbarComponent message={message} duration={3000} />
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
                    // size="small"
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
                        onClick={create}
                        disabled={isCreating}
                    >
                        {isCreating ? 'CREATING...' : 'CREATE POST'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
