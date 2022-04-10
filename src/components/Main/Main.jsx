import SlideShow from "../Slider/SlideShow";

const Main = () => {
  return (
    <main className="mt-20 w-full">
      {/* SlideShow */}
      <section className="slider hidden sm:block overflow-x-hidden">
        <SlideShow />
      </section>
    </main>
  );
};

export default Main;
