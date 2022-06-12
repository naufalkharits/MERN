import { Popover } from "@headlessui/react";
import DesktopMenus from "./DesktopMenus";
import MobileMenus from "./MobileMenus";

function Navbar() {
    return (
        <Popover>
            <nav className="bg-neutral-300 dark:bg-neutral-800">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <DesktopMenus />
                    <MobileMenus />
                </div>
            </nav>
        </Popover>
    );
}

export default Navbar;
