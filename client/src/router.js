
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
import MajorPage from './pages/majors/MajorPage';
import MajorUsersPage from './pages/majors/MajorUsersPage';
import StudentsLayout from './layouts/StudentsLayout';
import Dashboard from './pages/students/StudentDashboard';
import TakeExam from './pages/students/TakeExam';
import AdminDashboard from './pages/admins/AdminDashboard';
import AddQuestionPage from './pages/admins/exams/AddQuestionPage';
import ExamPage from 'pages/admins/exams/ExamPage';

import ExamResultPage from './pages/ExamResultsPAge'
import AddStudentsPage from 'pages/admins/AddUsersPage';


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
            // for admins
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
                        path: ":id/users",
                        element: <MajorUsersPage />
                    },

                ]
            },
            {
                path: '/admin/exams',
                children: [
                    {
                        path: "",
                        element: <ExamsPage />
                    },
                    {
                        path: ":id",
                        element: <ExamPage />
                    },
                    {
                        path: ":id/results",
                        element: <ExamResultPage />
                    }
                ]


            },
            // only for teachers
            {
                path: '/admin/exams/:id/questions/add',
                element: <AddQuestionPage />
            },
            // admins Only
            {
                path: '/admin/users/add',
                element: <AddStudentsPage />
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
                element: <AdminDashboard />
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
    }, {
        element: <StudentsLayout />,
        children: [
            {
                element: <Dashboard />,
                path: "/dashboard"
            },
            {
                element: <TakeExam />,
                path: "/exam/:id"
            }
        ]
    }
])

export default router;
