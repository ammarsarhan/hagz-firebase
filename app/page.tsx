import Navigation from "@/app/components/Navigation";
import Filter from "@/app/components/Filter";
import PitchCard from "@/app/components/PitchCard"

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
          <div className="hidden bg-muted lg:block bg-green-900">
          </div>
        </div>
      </main>
    </>
  );
}
