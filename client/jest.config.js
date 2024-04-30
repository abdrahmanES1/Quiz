module.exports = {
    // Indicates which environment Jest should use
    testEnvironment: 'jsdom', // Use jsdom for browser-like environment

    // Transform files with babel-jest
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest', // Transform .js and .jsx files using babel-jest
    },

    // Module file extensions to look for when running tests
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

    // Setup Jest to handle CSS and image imports in your components
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Handle CSS imports
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Handle image imports
    },

    // Ignore specific directories or files from test coverage
    coveragePathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],

    // Other Jest configuration options...
};