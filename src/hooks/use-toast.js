// src/hooks/use-toast.js
// Minimal stub for useToast to prevent import errors. Replace with your actual implementation if needed.

export function useToast() {
  return {
    toast: ({ title, description }) => {
      // You can replace this with a real toast notification
      alert(`${title}\n${description || ''}`);
    },
  };
}
