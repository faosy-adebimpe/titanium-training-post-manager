import IconButton from '@mui/material/IconButton';
import type { Post } from '../types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useDeletePost } from '../services/postsApi';
import useSnackbar from '../hooks/useSnackbar';

const Card = (post: Post) => {
    const { mutateAsync: deletePost } = useDeletePost();
    const { id, title, body } = post;
    const { SnackbarComponent, setOpen } = useSnackbar();
    return (
        <div className="flex flex-col gap-5 items-start w-sm shadow-md rounded-md p-3 transition hover:shadow-xl">
            <SnackbarComponent message={`Post ID: ${id} deleted`} />
            <h5 className="font-semibold text-lg">{title}</h5>
            <p>{body}</p>
            <div className="flex items-center gap-2 justify-end bg-gray-100 rounded-full">
                <Link to={`/edit/${id}`}>
                    <IconButton>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Link>
                <IconButton
                    onClick={async () => {
                        await deletePost(id);
                        setOpen(true);
                    }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    );
};

export default Card;
