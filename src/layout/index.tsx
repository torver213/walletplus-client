import React  from "react";
import TopNavbar from "../components/navs/TopNavbar";

const Index = (props: any) => {
  return (
    <div>
      <TopNavbar />
      <main>
        <div className="container-fluid">
          {props.children}
        </div>
      </main>
    </div>
  );
}

export default Index
