import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

class SeasonDisplay extends React.Component {
  state = { season: "" };

  seasonConfig = {
    summer: {
      text: "Lets hit the beach!",
      iconName: "sun",
    },
    winter: {
      text: "Burr, it is chilly",
      iconName: "snowflake",
    },
  };

  componentDidMount() {
    const currentSeason = getSeason(this.props.lat, new Date().getMonth());
    this.setState({ season: currentSeason });
  }

  render() {
    const currentSeason = this.state.season;
    if (currentSeason) {
      const { text, iconName } = this.seasonConfig[currentSeason];
      return (
        <div className={`season-display ${currentSeason}`}>
          <i className={`icon-left massive ${iconName} icon`} />
          <h1>{text}</h1>
          <i className={`icon-right massive ${iconName} icon`} />
        </div>
      );
    }
  }
}

export default SeasonDisplay;
