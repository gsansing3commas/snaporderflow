
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-secondary">
      <div className="text-center max-w-md px-6 py-12 glass-card rounded-lg">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <h2 className="text-2xl text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
            {location.pathname && (
              <span className="block mt-2 text-sm bg-black/30 p-2 rounded">
                Path: {location.pathname}
              </span>
            )}
          </p>
        </div>
        <button
          onClick={handleGoHome}
          className="btn-primary group flex items-center mx-auto"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
