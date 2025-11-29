"use client";
import React from "react";
import { AlertTriangle, CheckCircle, X } from "lucide-react";

export default function ConfirmModel({ message, onConfirm, onCancel, type = "delete" }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              type === "delete" ? "bg-red-100" : "bg-blue-100"
            }`}>
              {type === "delete" ? (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              ) : (
                <CheckCircle className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {type === "delete" ? "Confirm Deletion" : "Confirmation"}
            </h3>
          </div>
          <button
            onClick={onCancel}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Message */}
        <div className="p-6">
          <p className="text-gray-600 text-center leading-relaxed">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 p-6 border-t border-gray-100">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 border border-gray-200 hover:shadow-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 border ${
              type === "delete" 
                ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-500" 
                : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-blue-500"
            } hover:shadow-lg transform hover:scale-105`}
          >
            {type === "delete" ? "Delete" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}