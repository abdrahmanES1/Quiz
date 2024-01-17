
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/auth/Login'));
const AuthenticationLayout = lazy(() => import('./layouts/AuthenticationLayout'));
const Layout = lazy(() => import('./layouts/Layout'));
const TeachersLayout = lazy(() => import('./layouts/TeachersLayout'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ExamsPage = lazy(() => import('./pages/teachers/exams/ExamsPage'));
const MajorsPage = lazy(() => import('./pages/admins/majors/MajorsPage'));
const MajorPage = lazy(() => import('./pages/admins/majors/MajorPage'));
const MajorUsersPage = lazy(() => import('./pages/admins/majors/MajorUsersPage'));
const StudentsLayout = lazy(() => import('./layouts/StudentsLayout'));
const Dashboard = lazy(() => import('./pages/students/StudentDashboard'));
const TakeExam = lazy(() => import('./pages/students/TakeExam'));
const AdminDashboard = lazy(() => import('./pages/admins/AdminDashboard'));
const AddQuestionPage = lazy(() => import('./pages/teachers/questions/AddQuestionPage'));
const ExamPage = lazy(() => import('pages/teachers/exams/ExamPage'));

const ExamResultsPage = lazy(() => import('./pages/teachers/results/ExamResultsPage'));
const AddStudentsPage = lazy(() => import('pages/admins/users/AddUsersPage'));
const AddExamPage = lazy(() => import('pages/teachers/exams/AddExamPage'));


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '*',
                element: <NotFound />
            },

        ]
    },
    {
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
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
                        path: "/add",
                        element: <AddExamPage />
                    },
                    {
                        path: ":id",
                        element: <ExamPage />
                    },
                    {
                        path: ":id/results",
                        element: <ExamResultsPage />
                    },
                    {
                        path: ':id/questions/add',
                        element: <AddQuestionPage />
                    },

                ]


            },
            {
                path: '/admin/users/add',
                element: <AddStudentsPage />
            },

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
