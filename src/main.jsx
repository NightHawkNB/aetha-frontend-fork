import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import '@fontsource/poppins'; // Defaults to weight 400.
import '@fontsource/poppins/500.css'; // Weight 500.
import '@fontsource/poppins/600.css'; // Weight 600.
import '@fontsource/poppins/700.css'; // Weight 700.
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: { queries: { retryDelay: 1000, retry: 5 }}
})

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <main className="text-foreground bg-background">
                    <App/>
                </main>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AuthContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
    // </React.StrictMode>
);
