import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-24 right-4 sm:right-8 z-50 max-w-md w-full bg-[#181818] border border-[#E10600]/40 rounded-xl p-4 shadow-2xl backdrop-blur-md flex items-center gap-3 text-white"
      >
        {type === 'success' ? (
          <CheckCircle2 className="w-6 h-6 text-[#E10600] shrink-0" />
        ) : (
          <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
        )}
        <div className="flex-1 text-sm font-medium">{message}</div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
