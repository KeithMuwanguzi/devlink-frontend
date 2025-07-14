"use client";

import { FullScreenLoader } from "@/app/ReusableComponents/LoadingOverlay";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/Providers/AppProvider";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { currentPage } = useAppContext();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return <div>
        {isLoading && (
            <FullScreenLoader
                isLoading={isLoading}
                loadingText="Loading Application"
                loadingSubtext="Setting up your dashboard, please wait..."
                variant="spinner"
                size="xl"
                blur="sm"
                opacity="dark"
            />
        )}
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {currentPage === "dashboard" && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                                Dashboard
                            </div>
                        )}
                        {currentPage === "portfolio" && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                               Portfolio
                            </div>
                        )}
                        {currentPage === "profile" && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                                Profile
                            </div>
                        )}
                        {currentPage === "settings" && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                                Settings
                            </div>
                        )}
                        {currentPage === "analytics" && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                                Analytics
                            </div>
                        )}
                        {currentPage === "templates" && (
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                                Templates
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    </div>;
};

export default Dashboard;