'use client'
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()
interface MyLayoutProps {
    children: React.ReactNode;
}
const MyLayout: React.FC<MyLayoutProps> = ({children}) => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Navbar/>
                <main>
                    {children}
                </main>
                <Footer/>
                <ReactQueryDevtools initialIsOpen={false} />
             </QueryClientProvider>
        </div>
    );
};

export default MyLayout;
