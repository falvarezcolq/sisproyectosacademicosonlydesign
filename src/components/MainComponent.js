import React from "react";

import Overlay from "./Overlay";

import GoogleFontLoader from "react-google-font-loader";
import 'adminbsb-materialdesign/css/themes/all-themes.css';
import '../style/design.css';
import Navbar from "./NavbarComponent";
import Sidebar from "./SidebarComponent";
import HomeComponent from "../pages/HomeComponent";

class MainComponent extends React.Component {

  state = {
    bodyClass: "theme-indigo ls-closed",
    displayOverlay: "none",
    width: window.screen.width,
  };

  onBarClick = () => {
    if (this.state.bodyClass == "theme-indigo ls-closed overlay-open") {
      this.setState({ bodyClass: "theme-indigo ls-closed" });
      this.setState({ displayOverlay: "none" });
    } else if (this.state.bodyClass == "theme-indigo ls-closed") {
      this.setState({ bodyClass: "theme-indigo ls-closed overlay-open" });
      this.setState({ displayOverlay: "block" });
    }
  };

  onscreenresize = () => {
    console.log(window.screen.width);
    this.setState({ width: window.screen.width });
  };

  componentWillMount() {
    window.addEventListener("resize", this.onscreenresize);
  }

  componentWillUnmount() {
    window.RemoveEventListener("resize", this.onscreenresize);
  }

  render() {

    if (window.screen.width > 1150) {
      document.getElementById("root").className = "theme-indigo";
    } else {
      document.getElementById("root").className = this.state.bodyClass;
    }

    var Page = this.props.page;
    // console.log(this.props.page)
    return (
      <React.Fragment>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, 700],
            },
          ]}
          subsets={["latin", "cyrillic-ext"]}
        />
        <GoogleFontLoader
          fonts={[
            {
              font: "Material+Icons",
            },
          ]}
        />
        <Overlay display={this.state.displayOverlay} />
        <Navbar onBarClick={this.onBarClick} />
        <Sidebar activepage={this.props.activepage} />
        <Page {...this.props} />
        {/* <HomeComponent/> */}
      </React.Fragment>
    );
  }
}

export default MainComponent;
