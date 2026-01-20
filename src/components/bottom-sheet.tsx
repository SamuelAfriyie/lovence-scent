import { Drawer } from "vaul";

const BottomSheet = ({ trigger, title, children }: any) => {
    return (
        <Drawer.Root shouldScaleBackground>
            {/* The Trigger (e.g., your Filter button) */}
            <Drawer.Trigger asChild>
                {trigger}
            </Drawer.Trigger>

            <Drawer.Portal>
                {/* Semi-transparent Overlay */}
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-60" />

                <Drawer.Content className="bg-white flex flex-col rounded-t-[32px] h-[90dvh] fixed bottom-0 left-0 right-0 z-[70] outline-none">
                    {/* The "Handle" bar for dragging */}
                    <div className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-gray-300 mt-4 mb-2" />

                    <div className="p-6 bg-white rounded-t-[32px] flex-1 overflow-y-auto">
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="text-xl font-black text-muted mb-4 uppercase tracking-tight">
                                {title}
                            </Drawer.Title>

                            {/* Sheet Content */}
                            <div className="mt-2">
                                {children}
                            </div>
                        </div>
                    </div>

                    {/* Sticky Footer for Actions */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 mt-auto">
                        <Drawer.Close className="w-full bg-muted text-white py-4 rounded-full font-bold ring-inset ring-2 ring-transparent hover:ring-black">
                            Apply Changes
                        </Drawer.Close>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default BottomSheet;
