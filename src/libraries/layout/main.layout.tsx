import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"

type MainLayoutProps = {}
export default function MainLayout({}: MainLayoutProps) {
  return (
    <div className="main-background h-screen">
      <div className="flex items-start gap-4">
        <Sidebar />
        <div>
          <Outlet />
          Footer
        </div>
      </div>
    </div>
  )
}

/* Frame 2170 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 4px 8px 4px 34px;
// gap: 8px;

// width: 196px;
// height: 28px;

// background: #FFFFFF;
// /* Light/Elevation/card-rest */
// box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.04);
// border-radius: 6px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;
