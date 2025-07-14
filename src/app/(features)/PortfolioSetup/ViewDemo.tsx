"use client";

interface ViewDemoProps {
  onClose: () => void;
}

const ViewDemo = ({ onClose }: ViewDemoProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-700">View Demo</h2>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm py-1 px-3 rounded-lg shadow"
          >
            Close
          </button>
        </div>

        <p className="text-gray-700 text-center mb-6">
          Demos are coming soon to our official social media platforms!
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
          <li>Step-by-step video walkthroughs</li>
          <li>Feature highlights and use-cases</li>
          <li>Tips from the DevLink team</li>
        </ul>

        <p className="text-center text-xs text-gray-500 mt-6">
          Follow us to stay updated!
        </p>
      </div>
    </div>
  );
};

export default ViewDemo;
