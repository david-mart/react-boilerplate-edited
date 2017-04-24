import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { predictClarifai } from "../../actions/clarifai-actions";
import PredictionCard from "./prediction-card";

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "https://storage.googleapis.com/green-cheek/test.jpeg"
    };
    this.updateTerm = this.updateTerm.bind(this);
    this.runPrediction = this.runPrediction.bind(this);
  }

  runPrediction(event) {
    event.preventDefault();
    this.props.predictClarifai(this.state.term);
  }

  updateTerm(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    const { predictions } = this.props.clarifai;
    return (
      <div>
        <Paper zDepth={2}>
          <form onSubmit={this.runPrediction}>
            <TextField
              value={this.state.term}
              fullWidth={true}
              onChange={this.updateTerm}
            />
          </form>
        </Paper>
        {predictions.map(p => <PredictionCard key={p.id} prediction={p} />)}
      </div>
    );
  }
}

Playground.propTypes = {
  predictions: PropTypes.array,
  predictClarifai: PropTypes.func
};

const mapStateToProps = state => {
  const { clarifai } = state;
  return { clarifai };
};

export default connect(mapStateToProps, { predictClarifai })(Playground);
