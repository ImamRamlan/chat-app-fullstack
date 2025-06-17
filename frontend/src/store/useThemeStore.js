import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("chat-theme") || "coffee"; // fallback jika belum ada

  // Terapkan langsung saat store dibuat
  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      console.log("setTheme called:", theme); // cek di console
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      set({ theme });
    },
  };
});
