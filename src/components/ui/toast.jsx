import React from "react";
import { cn } from "../../lib/utils";
import { CheckCircleIcon, XCircleIcon, AlertTriangleIcon, InfoIcon, X } from "lucide-react";

/**
 * Toast Component - Displays a notification with a title, description, and optional close button.
 * @param {Object} props - Toast properties
 * @param {string} [props.variant="info"] - Type of toast ("success", "error", "warning", "info")
 * @param {string} [props.title] - Title of the toast message
 * @param {string} [props.description] - Description of the toast message
 * @param {Function} [props.onClose] - Function to close the toast
 */
const Toast = React.forwardRef(({ className, variant = "info", title, description, onClose, ...props }, ref) => {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return <CheckCircleIcon className="text-green-500 w-5 h-5" />;
      case "error":
        return <XCircleIcon className="text-red-500 w-5 h-5" />;
      case "warning":
        return <AlertTriangleIcon className="text-yellow-500 w-5 h-5" />;
      case "info":
      default:
        return <InfoIcon className="text-blue-500 w-5 h-5" />;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "group flex w-full items-center justify-between space-x-4 p-4 bg-white shadow-lg rounded-md border dark:bg-gray-800",
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-2">
        {getIcon()}
        <div>
          {title && <p className="font-semibold">{title}</p>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>
      {onClose && (
        <button
          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
});
Toast.displayName = "Toast";

export { Toast };
