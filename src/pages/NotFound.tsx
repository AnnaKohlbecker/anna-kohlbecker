import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="mb-4 text-xl text-black">Oops! Page not found</p>
        <a href="/" className="text-black underline hover:text-black">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
