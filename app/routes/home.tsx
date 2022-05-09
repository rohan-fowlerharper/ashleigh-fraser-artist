import SectionHeading from "~/components/SectionHeading";

export default function HomeRoute() {
  return (
    <>
      <div className="z-0 my-auto mb-6 flex h-96 justify-center bg-slate-100 text-center">
        <h1 className="self-center text-3xl font-bold tracking-widest text-zinc-700">
          Welcome to my site
        </h1>
      </div>
      <section id="introduction" className="mx-2 md:container md:mx-auto">
        <SectionHeading title="About Me" id="about" />
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="mb-6 text-zinc-700 lg:w-1/2">
            <p className="mb-2 text-base">
              Hi, I’m Ashleigh! I’m a pet and equine portrait artist and animal
              lover from New Zealand, where I share my home with three cats who
              like to chew the ends of my pencils.
            </p>
            <p className="mb-2 text-base">
              Art and drawing have always been a passion of mine; growing up I
              spent hours knelt on the ground with my graphite pencils, drawing
              as many horses as I could find pictures of! After several years of
              pursuing a Bachelor of Music and, I have come full circle, and am
              back with pencils in hand, ready to start my journey as an animal
              portrait artist. My passion for animals and drawing have found a
              happy union in this process! I find no greater satisfaction than
              when I create a piece of art that connects an owner with their
              cherished pets. My work is done in graphite pencils on quality art
              paper, from photographs you provide.
            </p>
            <p className="text-base">
              My goal through this process is to exceed your expectations of
              what a pencil pet portrait can be, providing you with a bespoke
              artwork to last a lifetime. I want your pet’s personality to shine
              through my artwork; bringing your pet to life with pencils and
              paper is my privilege, and I love every minute spent creating my
              work!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              width="100%"
              object-fit="cover"
              src="https://via.placeholder.com/300x150/09f/fff.png"
              alt="Ashleigh Fraser"
              className="mb-6"
            />
          </div>
        </div>

        <SectionHeading
          title="Contact"
          subtitle="I'd love to hear from you!"
          id="contact"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}
