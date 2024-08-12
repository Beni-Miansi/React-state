import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Beni Miansi",
        bio: "A passionate developer with experience in React.",
        imgSrc: "data:image/jpeg;base64,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",
        profession: "Software Engineer"
      },
      showProfile: false,
      intervalTime: 0
    };
    this.toggleProfile = this.toggleProfile.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        intervalTime: prevState.intervalTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile() {
    this.setState((prevState) => ({
      showProfile: !prevState.showProfile
    }));
  }

  render() {
    const { person, showProfile, intervalTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
        {showProfile && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {intervalTime} seconds</p>
      </div>
    );
  }
}

export default App;
