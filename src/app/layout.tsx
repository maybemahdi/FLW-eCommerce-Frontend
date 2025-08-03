import MyContextProvider from "@/lib/MyContextProvider";
import SessionProviderForNextAuth from "@/nextAuth/SessionProviderForNextAuth";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";
import { Toaster } from "sonner";
import "./globals.css";
import AntdConfigProvider from "@/Providers/AntdConfigProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MyContextProvider>
          <SessionProviderForNextAuth>
            <ReduxStoreProvider>
              <AntdConfigProvider>
                <Toaster richColors />
                {children}
              </AntdConfigProvider>
            </ReduxStoreProvider>
          </SessionProviderForNextAuth>
        </MyContextProvider>
      </body>
    </html>
  );
}
