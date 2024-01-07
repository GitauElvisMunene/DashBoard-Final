import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { checkAuthentication } from '../pages/Authentication/apiService';

interface DefaultLayoutProps {
  isAuthenticated: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ isAuthenticated }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkAuthenticationAsync = async () => {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      const isAuthenticated = checkAuthentication();
      console.log('IsAuthenticated:', isAuthenticated);
      setLoading(false);
    };

    checkAuthenticationAsync();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log('User not authenticated. Redirecting...');
    return null;
  }

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <PageWrapper
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
};

const PageWrapper: React.FC<{ sidebarOpen: boolean; setSidebarOpen: (isOpen: boolean) => void }> = ({ sidebarOpen, setSidebarOpen }) => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <ContentArea />
  </div>
);

const ContentArea: React.FC = () => (
  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
    <Header/>
    <MainContent />
  </div>
);

const MainContent: React.FC = () => (
  <main>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <Outlet />
    </div>
  </main>
);

export default DefaultLayout;
