"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Key,
  User,
  Mail,
  Tag,
  Plus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ConfirmModel from "@/components/ConfirmModel";

const YourPassword = () => {
  const [passwords, setPasswords] = useState([]);
  const [showPassword, setShowPassword] = useState({});
  const [showconfirm, setShowconfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const router = useRouter();

  // 🔹 Fetch all passwords
  useEffect(() => {
    fetch("/api/new-password")
      .then((res) => res.json())
      .then((data) => {
        setPasswords(data.passwords || []);
      })
      .catch((err) => {
        console.error("Error fetching passwords:", err);
      });
  }, []);

  // 🔹 Toggle password visibility
  const togglePasswordVisibility = (id) => {
    setShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🔹 Delete confirmation flow
  const handleDelete = (id) => {
    setSelectedId(id);
    setShowconfirm(true);
  };

  const confirmDelete = async () => {
    const id = selectedId;
    setShowconfirm(false);

    try {
      const response = await fetch(`/api/new-password/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        setPasswords(passwords.filter((item) => item._id !== id));
        alert("Password deleted successfully");
      } else {
        alert(result.message || "Error deleting password");
      }
    } catch (error) {
      console.error("Error deleting password:", error);
      alert("Error deleting password");
    }
  };

  // 🔹 Edit Password
  const handleEdit = (id) => {
    router.push(`/user/add-new-password?id=${id}`);
  };

  // 🔹 Empty state
  if (passwords.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 md:p-12 lg:p-28">
        <div className="h-16 md:h-20"></div>
        <div className="flex items-center justify-center p-4 md:p-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 border border-gray-200 text-center max-w-md w-full">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Key className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              No Passwords Yet
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
              Start securing your accounts by adding your first password.
            </p>
            <Link href="/user/add-new-password">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                <Plus className="w-4 h-4 md:w-5 md:h-5" />
                Add New Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 Main Password Grid
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-6 md:py-8">
      <div className="h-16 md:h-20"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">
              Your Passwords
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Manage and view all your saved passwords securely
            </p>
          </div>
          <Link href="/user/add-new-password">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base">
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
              Add New
            </button>
          </Link>
        </div>
      </div>

      {/* Passwords Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {passwords.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Tag className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base md:text-lg">
                      {item.title || "Untitled"}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm">Last updated</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Username</p>
                    <p className="text-sm font-medium text-gray-700">
                      {item.username || "-"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-700">
                      {item.email || "-"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <Key className="w-4 h-4 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Password</p>
                    <div className="flex items-center gap-2">
                      <input
                        type={showPassword[item._id] ? "text" : "password"}
                        value={item.password || ""}
                        readOnly
                        className="text-sm font-mono bg-gray-50 border-none outline-none w-full"
                      />
                      <button
                        onClick={() => togglePasswordVisibility(item._id)}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-1"
                      >
                        {showPassword[item._id] ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-3 md:pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleEdit(item._id)}
                  className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 md:px-4 rounded-lg font-medium hover:bg-blue-100 transition-all duration-200 flex items-center justify-center gap-1 md:gap-2 text-sm"
                >
                  <Edit className="w-3 h-3 md:w-4 md:h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex-1 bg-red-50 text-red-600 py-2 px-3 md:px-4 rounded-lg font-medium hover:bg-red-100 transition-all duration-200 flex items-center justify-center gap-1 md:gap-2 text-sm"
                >
                  <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Confirm Modal */}
      {showconfirm && (
        <ConfirmModel
          message="Are you sure you want to delete this password?"
          onConfirm={confirmDelete}
          onCancel={() => setShowconfirm(false)}
        />
      )}
    </div>
  );
};

export default YourPassword;