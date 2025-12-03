
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center px-4">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <Input 
            type="text" 
            label="Username" 
            placeholder="Enter Username"
          />

          <Input 
            type="password" 
            label="Password" 
            placeholder="Enter Password"
          />

          <Button onClick={handleLogin}>
            Login
          </Button>

          <p className="text-center text-sm text-gray-600 mt-2">
            Don’t have an account?{" "}
            <span 
              className="text-blue-600 font-medium cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

