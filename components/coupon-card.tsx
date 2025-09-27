"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
interface Coupon {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiryDate: string;
  terms: string;
  affiliateUrl: string;
}

interface CouponCardProps {
  coupon: Coupon;
}

export default function CouponCard({ coupon }: CouponCardProps) {
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Continue to Site");
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive button label
  useEffect(() => {
    const updateButtonLabel = () => {
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        setButtonLabel("Continue to APP");
      } else {
        setButtonLabel("Continue to Site");
      }
    };

    updateButtonLabel();
    window.addEventListener("resize", updateButtonLabel);

    return () => {
      window.removeEventListener("resize", updateButtonLabel);
    };
  }, []);

  // Countdown logic
  useEffect(() => {
    if (showCountdown && countdown > 0) {
      countdownRef.current = setTimeout(
        () => setCountdown(countdown - 1),
        1000
      );
    } else if (showCountdown && countdown === 0) {
      setShowCountdown(false);
      setShowModal(true);
      setCountdown(10);
    }

    return () => {
      if (countdownRef.current) {
        clearTimeout(countdownRef.current);
      }
    };
  }, [countdown, showCountdown]);

  // Copy coupon code
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(coupon.code);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = coupon.code;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
        } catch (err) {
          console.error("Fallback copy failed:", err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy coupon code:", err);
    }
  };

  const colors = [
    "#FBBF24",
    "#10B981",
    "#3B82F6",
    "#EF4444",
    "#8B5CF6",
    "#F472B6",
  ];

  return (
    <>
      {/* Coupon Card */}
      <Card className="w-full h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                {coupon.title}
              </h3>
              <p className="text-black dark:text-white mt-1">
                {coupon.description}
              </p>
            </div>
            <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-1 px-3 rounded-full text-sm shadow-md">
              {coupon.discount} OFF
            </span>
          </div>

          {/* Scratch-style Coupon */}
          <div
            className="relative w-full bg-yellow-50 border-2 border-dashed border-yellow-400 rounded-lg p-4 mb-4 mt-auto cursor-pointer overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => setShowCountdown(true)}
          >
            <code className="text-lg font-mono font-bold text-yellow-700 relative z-10 blur-md animate-pulse">
              {coupon.code.slice(-2).padStart(coupon.code.length, "*")}
            </code>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-sm animate-bounce">
                Scratch to reveal
              </span>
            </div>
          </div>

          <div className="text-sm text-green-500 font-semibold mb-2">
            ⏳ Expires: {coupon.expiryDate}
          </div>
          <div className="text-xs text-gray-600 dark:text-white mt-auto italic">
            <p>{coupon.terms}</p>
          </div>
        </CardContent>
      </Card>

      {/* Countdown + Ad Overlay */}
      <AnimatePresence>
        {showCountdown && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-md">
              <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
                ⏱ Hold on!
              </h2>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                Your coupon is almost ready. Check out this deal!
              </p>

              {/* Ad Container  Direct link*/}
              <div className="w-[300px] h-[250px] mb-4 flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                <Link href="/shop">
                <Image
                  src="/clickhere.png"
                  alt="Ad Placeholder"
                  width={300}
                  height={250}
                  className="w-full h-full object-cover"
                />
                </Link>
              </div>

              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 animate-pulse">
                {countdown}s
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fun countdown before your reward!
              </p>

              <button
                onClick={() => {
                  setShowCountdown(false);
                  setCountdown(10);
                  if (countdownRef.current) clearTimeout(countdownRef.current);
                }}
                className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm"
              >
                Skip Ad
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
            {/* Confetti Blast */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(60)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors[i % colors.length] }}
                  initial={{
                    y: -50,
                    x:
                      typeof window !== "undefined"
                        ? Math.random() * window.innerWidth
                        : 0,
                    rotate: 0,
                    opacity: 1,
                  }}
                  animate={{
                    y:
                      typeof window !== "undefined"
                        ? window.innerHeight + 50
                        : 1000,
                    rotate: Math.random() * 720,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: Math.random() * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-6 rounded-2xl max-w-md w-full shadow-xl z-10"
            >
              <h2 className="text-2xl font-bold mb-2">🎉 Congratulations!</h2>
              <p className="mb-2">{coupon.description}</p>
              <p className="mb-2 font-semibold">Expires: {coupon.expiryDate}</p>
              <p className="mb-4">Used: 418 times</p>

              <div className="flex items-center justify-between bg-yellow-100 text-black p-3 rounded-lg mb-4 border-2 border-dashed border-yellow-300">
                <code className="font-mono font-bold">{coupon.code}</code>
                <Button
                  size="sm"
                  onClick={handleCopy}
                  className={`px-3 py-1 rounded-md ${
                    copied
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white`}
                >
                  {copied ? "Copied!" : "COPY"}
                </Button>
              </div>

              <p className="text-sm mb-4">Enter code at checkout.</p>

              <div className="flex justify-between mt-4">
                <Button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-md"
                >
                  Close
                </Button>
                {coupon.affiliateUrl && (
                  <Link
                    href={coupon.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md text-white flex items-center justify-center"
                  >
                    {buttonLabel}
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
