import { HeroList } from "../components/";

export const Marvel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Marvel Comics</h1>
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
