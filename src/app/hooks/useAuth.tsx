import { useRouter } from "next/navigation";
import React from "react";

export default function useAuth() {
  const router = useRouter();

  function logout() {
    router.push("/sign-in");
    const theme = localStorage.getItem("dark");
    localStorage.clear();
    window.location.reload();
    localStorage.setItem("dark", theme ?? "");
  }

  return { logout };
}
