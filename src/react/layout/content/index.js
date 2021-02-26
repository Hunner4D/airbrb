import Sidebar from "../../components/sidebar";
import HotelView from "../../pages/hotel-view";

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
