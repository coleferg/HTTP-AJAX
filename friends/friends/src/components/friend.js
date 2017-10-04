import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';
import '../App.css';

class Friend extends Component {
    constructor(props) {
        super();
        this.state = {
            showHide: false
            }
    }

    handleView() {
        this.setState({showHide: !this.state.showHide});
    }

    removeFriend = (i) => {
        console.log(i);
        this.props.deleteFriend(i)
    }

    render() {
        const friend = this.props.friend;
        const number = this.props.index + 1;
        return (
            <div>
                <h3 onClick={() => this.handleView()}>{(number) + ". " + friend.name}</h3>
                    <div className={this.state.showHide ? 'shown' : 'hidden'}>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button className='delete' onClick={() => { console.log(this.props.index); return this.removeFriend(this.props.index)}}>delete friend</button>
                    </div>
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.deleteFriend
    };
};

export default connect(mapStateToProps, { deleteFriend })(Friend);

// let showHide = false;

// const Friend = (props) => {
//     const removeFriend = (i) => {
//         console.log(i);
//         props.deleteFriend(i)
//     }

//     const handleView = () => {
//         console.log(showHide);
//         showHide = !showHide;
//     }

//     console.log(props);
//     const friend = props.friend;
//     const number = props.index + 1;
//     return (
//         <div>
//             <h3 onClick={() => handleView()}>{(number) + ". " + friend.name}</h3>
//                 <div className={showHide ? 'shown' : 'hidden'}>
//                     <p>Age: {friend.age}</p>
//                     <p>Email: {friend.email}</p>
//                     <button className='delete' onClick={() => { console.log(props.index); return removeFriend(props.index)}}>delete friend</button>
//                 </div>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         friends: state.deleteFriend
//     };
// };

// export default connect(mapStateToProps, { deleteFriend })(Friend);