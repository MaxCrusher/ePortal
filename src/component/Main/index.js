import React, { Component } from "react";
import { Media } from "reactstrap";
import News from "./news.svg";
import "./index.css";

class Main extends Component {
  render = () => {
    console.log("+");
    return (
      <main>
        <h1>Новости</h1>
        <Media className="news">
          <Media left href="#">
            <Media className="img_media" object src={News} />
          </Media>
          <Media body>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="news">
          <Media left href="#">
            <Media className="img_media" object src={News} />
          </Media>
          <Media body>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="news">
          <Media left href="#">
            <Media className="img_media" object src={News} />
          </Media>
          <Media body>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </main>
    );
  };
}

export default Main;
