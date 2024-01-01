
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout';
import TeachersLayout from './layouts/TeachersLayout';
import AdminLogin from './pages/auth/AdminLogin';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ExamsPage from './pages/ExamsPage';
import MajorsPage from './pages/majors/MajorsPage';
import AddMajor from './pages/majors/AddMajor';
import UpdateMajor from './pages/majors/UpdateMajorPage';
import MajorPage from './pages/majors/MajorPage';
import MajorUsersPage from './pages/majors/MajorUsersPage';
import MajorExamsPage from './pages/majors/MajorExamsPage';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/my-profile',
                element: <Profile />
            },
            {
                path: '*',
                element: <NotFound />
            },
            // for testing
            {
                path: '/admin/majors',
                children: [
                    {
                        path: "",
                        element: <MajorsPage />,
                    },
                    {
                        path: ":id",
                        element: <MajorPage />
                    },
                    {
                        path: "new",
                        element: <AddMajor />
                    },
                    {
                        path: ":id/update",
                        element: <UpdateMajor />
                    },
                    {
                        path: ":id/users",
                        element: <MajorUsersPage />
                    },
                    {
                        path: ":id/exams",
                        element: <MajorExamsPage />
                    },
                ]
            },
            {
                path: '/admin/exams',
                element: <ExamsPage />
            },
        ]
    },
    {
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/admin/login',
                element: <AdminLogin />
            }
        ]
    },
    {
        element: <TeachersLayout />,
        children: [
            {
                path: '/admin/dashboard',
                element: "<Admin />"
            },
            // {
            //     path: '/admin/exams',
            //     element: <ExamsPage />
            // },
            // {
            //     path: '/admin/majors',
            //     element: <MajorsPage />
            // },

        ]
    }
])

export default router;
