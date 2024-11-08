import { AuthContextProvider } from "@/context/AuthContext";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <div className="h-screen relative">
        <div className="relative lg:absolute top-1/2 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </AuthContextProvider>
  );
}
