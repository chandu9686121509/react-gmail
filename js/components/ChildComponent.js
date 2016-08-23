var React=require('react');
var ReactDom=require('react-dom');
var GrantChild=require('./GrantChild');
var ChildComponent=React.createClass({
  render:function(){
    console.log("This is a child");
    return(
      <div>
  {this.props.food}
      </div>
      );
  }
})
module.exports=ChildComponent;
