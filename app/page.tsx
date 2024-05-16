import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-black text-white">
      <h1 className="text-[128px]">Storybook</h1>
      <p className="To go to Storybook, npm run storybook"></p>
    </div>
  );
}
