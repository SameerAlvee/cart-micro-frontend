import { registerApplication, start } from 'single-spa';

// Root configuration for single-spa micro frontend orchestration
// In this implementation, we're using React Router for navigation
// but maintaining single-spa's architectural principles

export const registerMicroFrontends = () => {
  // This demonstrates single-spa concepts while using React Router
  // In a production multi-repo setup, each micro frontend would be:
  // - A separate repository/application
  // - Independently deployable
  // - Registered here with their own lifecycle methods
  
  console.log('Single-SPA architecture initialized');
  console.log('Micro frontends: Admin (product management) & Shop (user cart)');
};

export const startSingleSpa = () => {
  start({
    urlRerouteOnly: true,
  });
};

// Initialize on module load
registerMicroFrontends();
