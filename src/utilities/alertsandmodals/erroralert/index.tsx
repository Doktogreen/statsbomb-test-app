import React from "react";
import './index.scss'
export default function ErrorAlert(){
    return(
        <div id="myModal" className="modal fade">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i className="material-icons">&#xE5CD;</i>
                        </div>				
                        <h4 className="modal-title w-100">Sorry!</h4>	
                    </div>
                    <div className="modal-body">
                        <p className="text-center">Your transaction has failed. Please go back and try again.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger btn-block" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>     
    )
}