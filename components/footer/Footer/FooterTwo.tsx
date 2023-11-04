import { Fragment, h } from "preact";
export default function FooterThree() {
  return (
    <div>
      <title>Website Title</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <footer class="flex flex-col justify-center items-center pt-3">
          <img src="/logo-coruja.svg" alt="" class = "h-[50px] w-[50px]"/>
          <p> Change the Footer to toggle Themes</p>
          <p className="text-xs leading-5 text-gray-500">&copy; 2023 RocketNey. All direitos reservados.</p>
      </footer>
    </div>
  );
}
