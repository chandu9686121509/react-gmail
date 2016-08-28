var React= require('react');
var ModalComponent=require('./ModalComponent');
var GrantChild= React.createClass({

    getInitialState: function()
      {
        return({myModal:false});
      },

        handleEvent: function()
    	{
    		this.props.changeEvent(this.props.id);
    	},

        changeModal: function()
        {
            return({myModal:true});
        },

    render: function(){
        return(
                <a className="list-group-item">
                <div id="wrap">
                <div className="row">
                <div className="col-lg-4">
                            <h6>From: <span id="MyFile">{this.props.from}</span></h6>
                        </div>
                        <div className="col-lg-4">
                            <a href="#" id="RightAnchor" className="list-group-item" onClick={this.changeModal} data-target="#myModal" data-toggle="modal">       <h6>Subject:<span id="MyFile">{this.props.subject}</span></h6></a>
                        </div>
                        <div className="col-lg-4">
                            <h6>Date: <span id="MyFile">{this.props.date}</span></h6>
                        </div>
                    </div>
                </div>
                {this.state.myModal ? <ModalComponent from={this.props.from} to={this.props.to} body={this.props.body}/>:null}
                </a>


        );
}
});
module.exports=GrantChild
