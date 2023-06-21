const title = "About Frans Allen";
const description =
  "Learn about Frans Allen's background, expertise, and contributions, providing valuable insights and solutions.";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    images: [
      {
        url: `/api/og?title=${title}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function About() {
  return (
    <article className="prose mx-auto pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-center text-black/90">About</h1>
      <p>
        Hello, I'm Frans Allen, a software engineer based in the vibrant city of
        Yogyakarta. I'm fluent in a wide range of web technologies. My passion
        lies in creating applications that can seamlessly scale to accommodate
        millions of users. Despite lacking formal education in IT and computer
        science, I have embarked on a self-taught journey, relying on
        documentation, trial and error, and a relentless drive for knowledge.
      </p>
      <p>
        Born into a family that couldn't afford a computer, I took on various
        jobs such as being a waiter, salesperson, and garbage collector to save
        up enough money to buy my first laptop. It was in 2014 that I truly
        delved into programming and discovered my deep fascination with the
        field. During that time, I would often find myself in internet cafes in
        the early hours of the morning, eagerly learning coding and devouring
        any information related to technology.
      </p>
      <p>
        Today, my focus in software development lies in two key areas: Web
        Performance and Internet Security. I derive immense satisfaction from
        crafting applications that are not only fast and reliable but also
        highly usable. As a testament to my passion for these areas, many of my
        projects heavily incorporate CDN and DNS technologies, as I find them to
        be indispensable components in achieving optimal results.
      </p>
      <p>
        When it comes to conducting research, I have developed a method I call
        "codewalking," inspired by the concept of "blogwalking." This approach
        entails meticulously exploring open-source software repositories to gain
        insights into how programs function. By immersing myself in this
        process, I can better comprehend the intricate workings, functions, and
        use cases of specific protocols and technologies.
      </p>
      <p>
        Over the course of my career, I have worked extensively with various
        programming languages, honing my skills and expanding my knowledge.
        Currently, my favorites are Go and JavaScript, as they offer powerful
        capabilities and flexibility for developing robust applications. As a
        problem solver at heart, I enjoy the challenge of finding elegant
        solutions to complex issues, while continuously pushing the boundaries
        of what can be achieved in software development.
      </p>
      <p>
        Whether working autonomously or in collaboration with others, I possess
        the adaptability and quick learning abilities necessary to excel. I am
        well-versed in tools such as Git and thrive in dynamic environments
        where I can contribute my expertise effectively.
      </p>
      <p>
        In an effort to share my knowledge and experiences, I actively engage
        with the software engineering community through my Twitter handle{" "}
        <a href="https://twitter.com/fransallen">@fransallen</a>. There, I offer
        concise tutorials, valuable hacks, and share my opinions on the field,
        all within the constraints of 280 characters or so. If you would like to
        connect, don't hesitate to say hello on Twitter!
      </p>
      <p>
        With a relentless pursuit of excellence and an unyielding passion for
        software engineering, I continue to embrace new challenges and make
        meaningful contributions to the world of technology.
      </p>
      <p>Let's embark on this exciting journey of coding together!</p>
    </article>
  );
}
