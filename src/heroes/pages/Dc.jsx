import { HeroList } from "../components/";

export const Dc = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">DCPage</h1>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
