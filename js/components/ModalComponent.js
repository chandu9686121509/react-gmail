var React=require('react');

var ModalComponent=React.createClass({
  render: function(){
    return(
      <div className="container">
      <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p id="fromTo"> From:  {this.props.from}</p>
          <p id="fromTo"> To:   {this.props.to}</p>

          <form className="form-horizontal" role="form">
              <div className="form-group">
                <textarea className="form-group" cols="2" rows="7" id="rules">
                {this.props.body}
                </textarea>
              </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      </div>
  </div>
  </div>
    );
  }
})
module.exports=ModalComponent
