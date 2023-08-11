import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

export default function AuthRootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="h-screen w-screen rainbow-mesh p-6 font-sans">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
