import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Suspense } from 'react';
import { Spinner, Center, Flex } from '@chakra-ui/react';
import ErrorBoundary from 'ErrorBoundary';



function App() {
  return (
    <Suspense fallback={
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Center>
          <Spinner size="xl" color='blue.500' />
        </Center>
      </Flex>
    }>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
