"use client";

import { Navbar } from "@/components/navbar";
import { Mail } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const CompactGlobe = dynamic(
  () => import("@/components/ui/compact-globe").then((m) => m.CompactGlobe),
  { ssr: false }
);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />

      <div className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side */}
            <div className="flex flex-col justify-start">
              {/* Email Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-lg bg-blue-600/20 border border-blue-600/50 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-500" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Contact us
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>

              {/* Contact Details */}
              <div className="flex flex-wrap gap-6 mb-12">
                <div className="text-sm text-gray-400">contact@athar.com</div>
                <div className="text-sm text-gray-400">•</div>
                <div className="text-sm text-gray-400">+91 8918394413</div>
                <div className="text-sm text-gray-400">•</div>
                <div className="text-sm text-gray-400">support@athar.com</div>
              </div>

              {/* Globe Section */}
              <div className="relative w-full max-w-md h-80">
                <CompactGlobe />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex items-start pt-0 lg:pt-8">
              <form
                onSubmit={handleSubmit}
                className="w-full space-y-4 bg-gray-950/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 lg:p-8"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Md Athar Reza"
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="support@athar.com"
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all pr-10"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Voyager"
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                    required
                  />
                </div>

                {/* Success Message */}
                {success && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">
                    <p className="text-green-400 text-xs">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                    <p className="text-red-400 text-xs">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-700 disabled:opacity-50 text-white font-medium py-2 px-6 rounded-lg text-sm transition-colors duration-200 w-full sm:w-auto"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
