import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 
export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    // Place the Blaze account templates in the div we just rendered
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  //Auto called whenever the component is about to be removed from the screen
  componentWillUnmount() {
    // Clean up Blaze view
    // Go find the forms we created and destroy them
    Blaze.remove(this.view);
  }
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
    //return <button name="login" type="button" ref="container" class="btn btn-default"></button>;
  }
}