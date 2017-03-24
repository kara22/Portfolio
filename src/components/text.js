import React, {Component} from "react";
class Text extends Component {
  render() {
    return(
    <div>
        <p>

        Kara Diaby - Full Stack Developer | <a href="https://github.com/kara22" target="_blank">Github</a> | <a href="https://linkedin.com/in/karadiaby/" target="_blank">Linkedin</a> | <a href="mailto:kdiaby.pro@gmail.com">Mail</a>

        </p>

        <p className="text-center">Credits :</p>
      <ul className="list-group">

        <li className="text-center list-group-item">
          <a href="https://markbin-app.herokuapp.com" target="_blank">Markbin - Personal project - Meteor / React JS</a>
        </li>

        <li className="text-center list-group-item">
          <a href="https://employees-random.herokuapp.com" target="_blank">Employees - Personal project - Meteor / React JS</a>
        </li>

        <li className="text-center list-group-item">
            <a href="https://youclone.herokuapp.com" target="_blank">Youclone - Personal project - React JS</a>
        </li>

        <li className="text-center list-group-item">
          <a href="https://emcc-export.herokuapp.com" target="_blank">Vinci construction - B2B project - Ruby</a>
        </li>

      </ul>


    </div>


      );
  }
}

export default Text;
