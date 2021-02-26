import Sidebar from "react/layout/sidebar";
import HotelView from "react/pages/hotel-view";

export default function Content() {
  return (
    <div className="content">
      <Sidebar />
      <main className="main-view">
        <HotelView />
      </main>
    </div>
  );
}
