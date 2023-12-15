import { HeroList } from "../components/";

export const Dc = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">DC Comics</h1>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
