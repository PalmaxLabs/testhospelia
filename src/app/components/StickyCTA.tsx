"use client";

import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function StickyCTA() {
  const scrollToSearch = () => {
    const s = document.querySelector('[data-results-section]');
    if (s) s.scrollIntoView({ behavior: 'smooth' });
  };

  return null;
}
