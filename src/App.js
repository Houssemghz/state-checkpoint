import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Karim Benzema",
        bio: " né le 19 décembre 1987 à Lyon",
        imgSrc:
          " https://www.pngitem.com/pimgs/m/521-5212471_karim-benzemarender-karim-benzema-2019-png-transparent-png.png",
        profession: "avant-centre au Real Madrid",
      },
      show: true,
      seconds: "00",
      minutes: "00",
      sec: 0,
    };
  }
  pad = (val) => {
    return val > 9 ? val : "0" + val;
  };
  count = () => {
    document.getElementById("seconds").innerHTML = this.pad(
      ++this.state.sec % 60
    );
    document.getElementById("minutes").innerHTML = this.pad(
      parseInt(this.state.sec / 60, 10)
    );
  };
  componentDidMount() {
    setInterval(this.count, 1000);
  }
  hideshow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <div className="button">
          <button onClick={this.hideshow} className="butt">
            {this.state.show === true ? "Hide" : "Show"}
          </button>
          <h4>Time Spent</h4>
          <div className="clock">
            <span id="minutes">{this.state.seconds}</span>:
            <span id="seconds">{this.state.minutes}</span>
          </div>
        </div>
        {this.state.show === true ? (
          <div className="box">
            <img
              src={this.state.Person.imgSrc}
              alt="karim benzema"
              style={{ width: "200px" }}
            ></img>
            <h6>
              Nom complet :{" "}
              <i style={{ fontFamily: "sans-serif", color: "GrayText" }}>
                {this.state.Person.fullName}
              </i>
            </h6>
            <h6>
              Bio :{" "}
              <i style={{ fontFamily: "sans-serif", color: "GrayText" }}>
                {this.state.Person.bio}
              </i>
            </h6>
            <h6>
              Profession :{" "}
              <i style={{ fontFamily: "sans-serif", color: "GrayText" }}>
                {this.state.Person.profession}
              </i>
            </h6>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default App;
