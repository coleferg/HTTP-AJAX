import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFriend, updateFriend } from '../actions';
import '../App.css';

class Friend extends Component {
    constructor(props) {
        super();
        this.state = {
            showHide: false,
            editable: false,
            person: {
                name: '',
                age: 0,
                email: '',
                }
            }
    }

    componentDidMount() {
        this.setState({
          person: {
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email,
            }
        });
      }

    editFriend(index) {
        console.log(this.state.person);
        this.props.updateFriend(this.state.person, index);
        this.setState({
            person: {
                name: '',
                age: 0,
                email: '',
                }
            })
    }

    handleView() {
        this.setState({showHide: !this.state.showHide});
    }

    handleEditView() {
        this.setState({editable: !this.state.editable});
    }

    removeFriend = (i) => {
        console.log(i);
        this.props.deleteFriend(i)
    }

    handleName(event) {
        event.preventDefault();
        this.setState({person: {name: event.target.value, age: this.state.person.age, email: this.state.person.email }})
    };

    handleAge(event) {
        event.preventDefault();
        this.setState({person: {name: this.state.person.name, age: event.target.value, email: this.state.person.email}})
    };

    handleEmail(event) {
        event.preventDefault();
        this.setState({person :{name: this.state.person.name, age: this.state.person.age, email: event.target.value }})
    };


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

                    <button onClick={() => this.handleEditView()} className='edit'>Edit friend</button>
                    <div className={this.state.editable ? 'shown' : 'hidden'}>
                        <form>
                            <div><input className='form' type='text' onChange={this.handleName.bind(this)} placeholder={friend.name} /></div>
                            <div><input className='form' type='number' onChange={this.handleAge.bind(this)} placeholder={friend.age} /></div>
                            <div><input className='form' type='email' onChange={this.handleEmail.bind(this)} placeholder={friend.email} /></div>
                            <div><button className='newfriend' onClick={() => this.editFriend(this.props.index)}>Submit</button></div>
                        </form>
                    </div>
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

export default connect(mapStateToProps, { deleteFriend, updateFriend })(Friend);

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