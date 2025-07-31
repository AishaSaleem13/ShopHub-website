import React from 'react';

function ImageModal({ isOpen, onClose, imageUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="h-[50vh] overflow-hidden">
          <img
            src={imageUrl}
            alt="Modal Content"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Welcome!</h2>
          <p className="text-gray-600">
            Discover design inspirations and ideas below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
