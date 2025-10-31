"use client";

import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 sm:px-10 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Address</h3>
            <p>Birsa main street, Near by Purvansh stationary, pincode-481051</p>
            <p>Birsa, Madhya Pradesh, India</p>
            <p>E-mail - ojubhagat1012@gmail.com</p>
            <p>Phone no. - 7354506728</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <a href="#results" className="hover:text-white transition">
                  Results
                </a>
              </li>
              <li>
                <a href="#achievers" className="hover:text-white transition">
                  Achievers
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Find Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3699.2146233333456!2d80.74156007528396!3d22.003085979901407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDAwJzExLjEiTiA4MMKwNDQnMzguOSJF!5e0!3m2!1sen!2sin!4v1755056585329!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          {/* YouTube */}
          <a
            href="https://youtube.com/@varsitymath1057?si=0U9Tc4v5jHuEPTVs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            <YouTubeIcon fontSize="small" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/varsity_math_?utm_source=qr&igsh=aW5pbWs0OG81djl6"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gradient-to-tr from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition"
          >
            <InstagramIcon fontSize="small" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917852059628"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500 space-y-2">
          <div>
            Developed <span className="font-semibold text-white">and</span> &nbsp;|&nbsp; Managed by{" "}
            <span className="font-semibold text-white">metaSolve</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} metaSolve. All rights reserved.
          </div>
          <div>
            Contact:{" "}
            <a href="mailto:metasolve.in@gmail.com" className="underline hover:text-white">
              metasolve.in@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
