import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardText, CardActions } from "material-ui/Card";
import Chip from "material-ui/Chip";
import FlatButton from "material-ui/FlatButton";
class PredictionsCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const { prediction } = this.props;

    return (
      <div>
        <Card key={prediction.id}>
          <CardMedia><img src={prediction.input.data.image.url} /></CardMedia>
          <CardText>
            {prediction.data.concepts.map(c => <Chip key={c.id}>{c.name}</Chip>)}
          </CardText>
          <CardActions>
            <FlatButton label="Remove" />
            <FlatButton label="Research" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

PredictionsCard.propTypes = {
  prediction: PropTypes.object
};

export default PredictionsCard;
