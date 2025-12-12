import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0a0f23] text-white selection:bg-indigo-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
            </div>

            <div className="relative z-10 flex">
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 h-screen max-h-screen overflow-y-auto md:pl-72 transition-all duration-300">
                    <div className="w-full h-full p-4 bg-[#0a0f23]">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
