import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">Page not found</h1>
        <Button
          type="submit"
          className="mt-10 bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white transition-all duration-300 shadow-lg hover:shadow-glow"
          size="lg"
          onClick={() => (window.location.href = "/")}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
