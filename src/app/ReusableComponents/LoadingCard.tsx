"use client";
import { FC } from "react";

interface LoadingCardProps {
  message: string;
  onClose?: () => void;
}

const LoadingCard: FC<LoadingCardProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/25 backdrop-blur-sm animate-in fade-in rounded-md">
      <div className="bg-white w-[400px] rounded-lg shadow-2xl flex flex-col items-center relative animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="bg-primary w-full rounded-t-lg flex items-center justify-center p-4">
          <h2 className="text-white text-xl font-semibold text-center mb-2">
            Please wait
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-4 w-full flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-center text-gray-600 text-sm pt-4">{message}</p>
        </div>

        {onClose && (
          <div className="px-6 py-4 w-full flex justify-center border-t">
            <button
              onClick={onClose}
              className="text-white bg-primary px-8 py-2 rounded-md hover:opacity-90 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg active:scale-95"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingCard;
