var React=require('react');
var ReactDom=require('react-dom');

var MyComponent=React.createClass({
    render:function(){
      console.log("This is a child");
      return(

        <button type="button" className="btn btn-primary" onClick={this.props.handleChangeState}> click me</button>

  );
}
})
module.exports=MyComponent;
