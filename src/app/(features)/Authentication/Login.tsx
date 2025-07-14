interface LoginProps {
    onClose: () => void;
}

const Login = ({ onClose }: LoginProps) => {
  return <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md animate-in fade-in">
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-white/20 w-full max-w-md h-[90%]">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Login</h2>
            <button onClick={onClose} className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm py-2 px-4 rounded-lg transition-all duration-200 border border-gray-200">
                Close
            </button>
        </div>
    </div>
  </div>;
};

export default Login;