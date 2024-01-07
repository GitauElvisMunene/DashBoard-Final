import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { checkAuthentication } from "./pages/Authentication/apiService";

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  

  useEffect(() => {
    console.log(67)
    const authenticateUser = async () => {
      try {
        const isAuthenticated = await checkAuthentication();
        if (isAuthenticated) {
          navigate('/');
        }
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error('Error during authentication check:', error);
      } finally {
        setLoading(false);
      }
    };
  
    authenticateUser();
  }, []);

  


  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout isAuthenticated={isAuthenticated} />}>
          <Route path='/'  element={<ECommerce />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<Loader />}>
                  {/* Check if the user is authenticated before rendering the component */}
                  {isAuthenticated ? <route.component /> : navigate("/auth/signin")}
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;