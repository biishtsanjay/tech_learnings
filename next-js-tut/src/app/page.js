"use client";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

// import Router from "next/router";
export default function Home() {
  const router = useRouter();
  // const router = Router;
  return (
    <main>
      <h1 className={roboto.className}>
        This is a test text and this is nextJs application with robot font
      </h1>
      {/* <Link href="/about">go to about  </Link> */}
      <button onClick={() => router.push("/about")}>go to about </button>
      <Image
        src={
          "https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=Su2wYszfDTThmt7AcCA5OHfGcqFVBxy73W-5YtemT28="
        }
        width={400}
        height={200}
      ></Image>
    </main>
  );
}
