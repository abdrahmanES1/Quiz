// ErrorBoundary.jsx
import React, { Component } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" mt={20}>
          <Heading fontSize="xl" color="red.500">
            Something went wrong.
          </Heading>
          <Text fontSize="md" color="gray.500" mt={4}>
            An error occurred while rendering this page. Please try again later.
          </Text>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
