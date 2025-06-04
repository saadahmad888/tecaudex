import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import "../style/style.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="PageHeading">
        <div className="container">
          <h1 className="pageTitle">
            Dashboard
          </h1>
          <p className="description">
            Overview of your sales performance and customer interactions.
          </p>
        </div>
      </div>
    </>
  );
}
