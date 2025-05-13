import HomeCategory from "../components/ui/ServicePage/HomeCategory";
import UpComingServices from "../components/ui/ServicePage/UpcomingService";

export default function ServicePage() {
  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <HomeCategory />
      <UpComingServices />
    </section>
  );
}
