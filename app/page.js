import AgeGroupWidget from "@/components/home/AgeGroupWidget";
import WidgetContainer from "@/components/home/WidgetContainer";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center">
        <LeftSidebar/>
        <WidgetContainer/>
        <RightSidebar/>
    </main>
  );
}
