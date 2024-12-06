import Navbar from "./components/Navbar/Navbar";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <div className="relative">
        <Navbar />
      </div>
    </RootLayout>
  );
}
