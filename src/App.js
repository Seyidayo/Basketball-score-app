import React, { Component } from "react";
import "./App.css";
import {
  Modal,
  Button,
  Form,
  Header,
  Segment,
  Grid,
  Icon,
  Menu
} from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team_1: "",
      team_2: "",
      team_1_score: 0,
      team_2_score: 0,

      team_1_lastScore: 0,
      team_2_lastScore: 0,

      modalOpen: true
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    const { team_1, team_2 } = this.state;
    if (team_1 !== "" && team_2 !== "") {
      this.setState({ modalOpen: false });
    }
  };

  addThreePointToTeam1 = () => {
    const { team_1_score } = this.state;
    this.setState({ team_1_score: team_1_score + 3, team_1_lastScore: 3 });
  };

  addThreePointToTeam2 = () => {
    const { team_2_score } = this.state;
    this.setState({ team_2_score: team_2_score + 3, team_2_lastScore: 3 });
  };

  addTwoPointToTeam1 = () => {
    const { team_1_score } = this.state;
    this.setState({ team_1_score: team_1_score + 2, team_1_lastScore: 2 });
  };

  addTwoPointToTeam2 = () => {
    const { team_2_score } = this.state;
    this.setState({ team_2_score: team_2_score + 2, team_2_lastScore: 2 });
  };

  addOnePointToTeam1 = () => {
    const { team_1_score } = this.state;
    this.setState({ team_1_score: team_1_score + 1, team_1_lastScore: 1 });
  };

  addOnePointToTeam2 = () => {
    const { team_2_score } = this.state;
    this.setState({ team_2_score: team_2_score + 1, team_2_lastScore: 1 });
  };

  undoLastTeam1Score = () => {
    const { team_1_score, team_1_lastScore } = this.state;
    this.setState({ team_1_score: team_1_score - team_1_lastScore });
  };

  undoLastTeam2Score = () => {
    const { team_2_score, team_2_lastScore } = this.state;
    this.setState({ team_2_score: team_2_score - team_2_lastScore });
  };

  restartMatch = event => {
    event.preventDefault();
    window.location.reload();
  };
  render() {
    const {
      modalOpen,
      team_1,
      team_2,
      team_1_score,
      team_2_score
    } = this.state;
    return (
      <React.Fragment>
        <Menu borderless className="bg-color">
          <Menu.Item>
            <Header color="white" size="small">Covenant University Basketball App</Header>
          </Menu.Item>
        </Menu>
        <Modal
          open={modalOpen}
          size="mini"
          closeOnDimmerClick={false}
          closeOnEscape={false}
        >
          <Modal.Header> Enter the Team Names</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleClose}>
              <Form.Input
                onChange={this.handleChange}
                name="team_1"
                value={team_1}
                placeholder="Team 1"
              />
              <Form.Input
                onChange={this.handleChange}
                name="team_2"
                value={team_2}
                placeholder="Team 2"
              />
              <Button size="large" fluid onClick={this.handleClose}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>

        <Grid container verticalAlign="middle" textAlign="center">
          <Grid.Row style={{ maxWidth: 450, paddingTop: 60 }}>
            <Grid.Column width={8}>
              <Segment className="score-board">
                <Header size="large">{team_1}</Header>
                <Header size="huge">{team_1_score}</Header>
              </Segment>

              <Button fluid size="large" onClick={this.addThreePointToTeam1}>
                {" "}
                +3pts{" "}
              </Button>
              <Button fluid size="large" onClick={this.addTwoPointToTeam1}>
                {" "}
                +2pts{" "}
              </Button>
              <Button fluid size="large" onClick={this.addOnePointToTeam1}>
                {" "}
                +1pts{" "}
              </Button>
              <Button fluid size="small" onClick={this.undoLastTeam1Score}>
                <Icon name="undo" />
              </Button>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment className="score-board">
                <Header size="large">{team_2}</Header>
                <Header size="huge">{team_2_score}</Header>
              </Segment>

              <Button fluid size="large" onClick={this.addThreePointToTeam2}>
                {" "}
                +3pts{" "}
              </Button>
              <Button fluid size="large" onClick={this.addTwoPointToTeam2}>
                {" "}
                +2pts{" "}
              </Button>
              <Button fluid size="large" onClick={this.addOnePointToTeam2}>
                {" "}
                +1pts{" "}
              </Button>
              <Button fluid size="small" onClick={this.undoLastTeam2Score}>
                <Icon name="undo" />
              </Button>
            </Grid.Column>

            <Modal
              size="mini"
              closeOnDimmerClick={false}
              closeOnEscape={false}
              trigger={<Button>End Match</Button>}
            >
              <Modal.Header style={{ textAlign: "center" }}>
                Congratulations!
              </Modal.Header>
              <Modal.Content>
                <Grid textAlign="center">
                  <Grid.Row>
                    <Grid.Column width="8">
                      <Segment className="score-board">
                        <Header size="large">{team_1}</Header>
                        <Header size="huge">{team_1_score}</Header>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width="8">
                      <Segment className="score-board">
                        <Header size="large">{team_2}</Header>
                        <Header size="huge">{team_2_score}</Header>
                      </Segment>
                    </Grid.Column>
                    <Button onClick={this.restartMatch} size="medium" fluid>
                      {" "}
                      Restart{" "}
                    </Button>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
            </Modal>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
