import { HeroList } from "../components/";

export const Marvel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Marvel Heroes</h1>
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
