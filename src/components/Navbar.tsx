import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
const Navbar = () => {
    return (
        <nav className="bg-gray-100">
            <div className="container">
                <div className="flex items-center justify-between py-5 ">
                    <Link to="/">
                        <h2 className="text-xl font-bold">Post Manager</h2>
                    </Link>
                    <Link to="/create">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                },
                            }}
                            endIcon={<AddIcon />}
                        >
                            CREATE POST
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
