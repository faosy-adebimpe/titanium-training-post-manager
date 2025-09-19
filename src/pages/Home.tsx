import { usePaginatedPosts } from '../services/postsApi';
import Loading from '../components/Loading';
import Card from '../components/Card';
import Button from '@mui/material/Button';
import { useState } from 'react';
const Home = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const { isLoading, data: posts } = usePaginatedPosts(page, limit);
    return (
        <div className="mt-10">
            <div className="container">
                {isLoading ? (
                    <Loading count={limit} />
                ) : (
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        {posts?.map((post) => (
                            <Card key={post.id} {...post} />
                        ))}
                    </div>
                )}

                {posts?.length === 0 && (
                    <div className="text-center text-black/50">No posts</div>
                )}

                {!isLoading && posts?.length !== 0 && (
                    <div className="p-5">
                        <div className="flex justify-between mt-10">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    },
                                }}
                                onClick={() =>
                                    setPage((prev) => Math.max(prev - 1, 1))
                                }
                                disabled={page === 1}
                            >
                                PREV
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    },
                                }}
                                onClick={() => setPage((page) => page + 1)}
                            >
                                NEXT
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
