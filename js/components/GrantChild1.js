var React= require('react');

var GrantChild1= React.createClass({
    handleEvent: function()
	{
		this.props.changeEvent(this.props.id);
	},
    render: function(){
        return(
            <div>
                <a id="LeftAnchor" onClick={this.handleEvent} className="list-group-item" href="#">{this.props.name}</a>
            </div>
        );
}
});
module.exports=GrantChild1
