import {Fragment} from "react";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = (props) => {
    return (
      <Fragment>
          <Navigation/>
          <main>
              {props.children}
          </main>
          <Footer/>
      </Fragment>
    );
};

export default Layout;