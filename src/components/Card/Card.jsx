import React from "react";
import { Link} from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFav: this.props.isFav}; 
  }

  componentDidMount() {
    const { myFavorites, id } = this.props;
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        this.setState({ isFav: true });
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { myFavorites, id } = this.props;
    if (prevProps.myFavorites !== myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          this.setState({ isFav: true });
        }
      });
    }
  }
  render() {
    return (
      
      <div  key={this.props.id} className="card">
        {this.state.isFav ? (
          <button onClick={() => { this.setState({isFav: false})}} >❤️</button>
        ) : (
          <button onClick={() => {this.props.addFav(this.props); this.setState({isFav: true})}}>🤍</button>
        )}
        <button onClick={() => this.props.onClose(this.props.id)}>X</button>

        <div className="info">
          <img
            
            src={this.props.image}
            alt={this.props.name}
          />
          <Link to={`/detail/${this.props.id}`}>
            <h3>{this.props.name}</h3>
          </Link>
          <h4>{this.props.species}</h4>
          <h4>{this.props.gender}</h4>
          <h4>{this.props.status}</h4>
          <h4>{this.props.origin}</h4>
        </div>
      </div>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (chart) => {
      dispatch(addFav(chart));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
