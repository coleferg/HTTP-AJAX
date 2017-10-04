import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, newFriend, updateFriend } from '../actions';
import '../App.css';
import Friend from './friend'

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            email: '',
            }
    }

    componentDidMount() {
        this.props.getFriends();
    }

    addFriend(event) {
        event.preventDefault();
        this.props.newFriend(this.state);
        this.setState({
            name: '',
            age: 0,
            email: '',
            })
    }

    editFriend(index) {
        this.props.updateFriend(this.state, index);
        this.setState({
            name: '',
            age: 0,
            email: '',
            })
    }

    handleName(event) {
        event.preventDefault()
        this.setState({name: event.target.value })
    };

    handleAge(event) {
        event.preventDefault()
        this.setState({age: event.target.value })
    };

    handleEmail(event) {
        event.preventDefault()
        this.setState({email: event.target.value })
    };


    render() {
        return (
            <div>
                <div>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <div key={i} className="friend">
                                <Friend key={i} friend={friend} index={i}/>
                                <button className='edit' onClick={() => { return this.editFriend(i)}}>Edit Friend</button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <form onSubmit={this.addFriend.bind(this)}>
                        <div><input className='form' type='text' onChange={this.handleName.bind(this)} placeholder='Name' /></div>
                        <div><input className='form' type='number' onChange={this.handleAge.bind(this)} placeholder='Age' /></div>
                        <div><input className='form' type='email' onChange={this.handleEmail.bind(this)} placeholder='Email' /></div>
                        <div><button className='newfriend' type='submit'>Add new friend!</button></div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        friends: state
    };
};

export default connect(mapStateToProps, { getFriends, newFriend, updateFriend })(FriendsList);