import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import EditPost from '../pages/EditPost';
import CreatePost from '../pages/CreatePost';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="edit/:id" element={<EditPost />} />
                    <Route path="create" element={<CreatePost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
