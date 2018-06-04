import React, { Component } from "react";
import { Button, Dialog, Intent } from "@blueprintjs/core";
import IconEl from '../IconEl';

const DialogBox = (WrappedComponent, dialogProps) => {    
  return class extends Component {
    state = { isOpen: false };

    toggleDialog = (callback = null) => {
      this.setState({ isOpen: !this.state.isOpen });
      if (typeof callback === "function") callback();
    };  

    submitHandler = (callback = null) => {
      if (typeof callback === "function") callback(this.toggleDialog);    
    };
    
    render() {
      let dialogToggleBtn = <Button onClick={() => this.toggleDialog(dialogProps.showDialogBtnHandler)} {...dialogProps.btn} />;
      if (dialogProps.btn.type === "icon") {
        dialogToggleBtn = <IconEl onClick={() => this.toggleDialog(dialogProps.showDialogBtnHandler)} {...dialogProps.btn} />;
      }
      return (
        <React.Fragment>        
          {dialogToggleBtn}        
          <Dialog
            isOpen={this.state.isOpen}
            onClose={this.toggleDialog}
            {...dialogProps.dialog}
          >
            <div className="pt-dialog-body">
              <WrappedComponent 
                {...this.props} 
                dialogCloseHandler={this.toggleDialog}
                dialogSubmitHandler={this.submitHandler} />              
            </div>
            {!dialogProps.customOperationBtn && (
              <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                  <Button text="close" onClick={this.toggleDialog} />
                  <Button
                    text="save"
                    intent={Intent.PRIMARY}
                    {...dialogProps.submitBtn}
                    onClick={() => this.submitHandler(dialogProps.saveBtnHandler)}
                  />
                </div>
              </div>
            )}
          </Dialog>
        </React.Fragment>
      );
    }
  }
}

export default DialogBox;
