import { Fragment, h } from "preact";
export default function FooterThree() {
  return (
    <div>
      <title>Website Title</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <footer class="container-fluid bg-dark text-white text-center">
        <div class="row">
          <div class="col">
            <ul class="list-unstyled">
              <li>
                <a class="text-white" href="#">Home</a>
              </li>
              <li>
                <a class="text-white" href="#">About</a>
              </li>
              <li>
                <a class="text-white" href="#">Services</a>
              </li>
              <li>
                <a class="text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <p>© 2023 YourWebsite.com</p>
      </footer>
    </div>
  );
}
