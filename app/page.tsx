import Navigation from "@/app/components/Navigation";
import Filter from "@/app/components/Filter";
import PitchCard from "@/app/components/PitchCard";

import MapProvider from "@/context/MapProvider";
import Map from "@/app/components/Map";

export default function Home() {
  return (
    <>
      <Navigation/>
      <Filter/>
      <main className="flex-1 overflow-auto">
        <div className="w-full lg:grid lg:h-full lg:grid-cols-2">
          <div className="p-5 h-full flex justify-around flex-wrap overflow-scroll">
            <PitchCard/>
            <PitchCard/>
            <PitchCard/>
            <PitchCard/>
            <PitchCard/>
            <PitchCard/>
          </div>
          <MapProvider>
            <div className="hidden bg-muted lg:block bg-green-900">
              <Map/>
            </div>
          </MapProvider>
        </div>
      </main>
    </>
  );
}
