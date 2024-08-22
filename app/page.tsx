import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/Header";
import MyRouter from "./components/MyRouter";
import ServerComponent from "./server-component/page";
import Card from "./components/Card";
import ClientComponent from "./client-component/page";
import Button from "./components/button";


export default function Home() {
  return (
    <div className="p-2 w-5/6 m-auto ">
      <div className="py-5">
        <h1>navbar:hello</h1>
        <Header logo="https://logos-world.net/wp-content/uploads/2020/11/The-Body-Shop-Logo.png" title="my logo" login="login" />
      </div>
      <div className="py-5">
        <h1>Card:</h1>
        <Card title="Card Title" content="This is the card content. It provides some details about the card." footer="" />
      </div>
      <div className=" flex gap-2 p-1 w-[400px] m-auto text-white ">
        <Link href={"./client-component"} className="bg-pink-400 hover:bg-pink-500 p-2" >client component</Link>
        <Link href={"./server-component"} className="bg-pink-400 hover:bg-pink-500 p-2">server component</Link>
      </div>
      <div className="py-5">
        <h1> this is footer:</h1>
        <Footer/>
      </div>
    </div>
  );
}
