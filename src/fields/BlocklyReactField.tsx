/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 16:11:39
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-21 11:04:21
 * @FilePath: \blockdemo\src\fields\BlocklyReactField.tsx
 */

import ReactDOM from 'react-dom';

import * as Blockly from 'blockly/core';

class BlocklyReactField extends Blockly.Field {

    SERIALIZABLE = true
    div_: Element | undefined;
    
    static fromJson(options:any) {
      return new BlocklyReactField(options['text']);
    }
  
    showEditor_() {
      this.div_ = Blockly.DropDownDiv.getContentDiv();
      ReactDOM.render(this.render(),
        this.div_);
  
  
      Blockly.DropDownDiv.showPositionedByField(
        this, this.dropdownDispose_.bind(this));
    }
  
    dropdownDispose_() {
        if(this.div_){
            ReactDOM.unmountComponentAtNode(this.div_);
        }
    }
  
    render() {
      return <FieldRenderComponent />
    }
}

function FieldRenderComponent(){
    return <div >
            yehuozhili
      </div>; 
}
Blockly.fieldRegistry.register('field_react_component', BlocklyReactField);


export default BlocklyReactField;
