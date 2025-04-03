import React from "react";
import { useToast } from "../../contexts/ToastContext"; // Ensure correct import
import { Toast } from "./toast";
import { AnimatePresence, motion } from "framer-motion";

export function Toaster() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 max-w-sm">
      <AnimatePresence>
        {toasts.map(({ id, title, description, variant }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Toast
              title={title}
              description={description}
              variant={variant}
              onClose={() => removeToast(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
