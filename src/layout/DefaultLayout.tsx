import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { checkAuthentication } from '../pages/Authentication/apiService'; // Import the checkAuthentication function

interface DefaultLayoutProps {
  isAuthenticated: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ isAuthenticated }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (replace with your actual authentication check)
    const checkAuthenticationAsync = async () => {
      // Simulated delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 1000));

      const isAuthenticated = checkAuthentication(); // Use the checkAuthentication function
      console.log('IsAuthenticated:', isAuthenticated);

      setLoading(false);
    };

    checkAuthenticationAsync();
  }, []);

  // Check if the user is authenticated before rendering the dashboard content
  if (loading) {
    // Loading state - you can render a loading spinner or any other indication
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log('User not authenticated. Redirecting...');
    return null;
  }

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
