/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 16:18:56
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-15 16:25:06
 * @FilePath: \blockdemo\src\fields\DateField.tsx
 */
import * as Blockly from 'blockly/core';

import BlocklyReactField from './BlocklyReactField';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class ReactDateField extends BlocklyReactField {

  static fromJson(options:any) {
    return new ReactDateField(new Date(options['date']));
  }
  
  onDateSelected_ = (date:Date) => {
    this.setValue(new Date(date));
    Blockly.DropDownDiv.hideIfOwner(this, true);
  }

  getText_() {
    return this.value_.toLocaleDateString();
  };

  fromXml(fieldElement :Element) {
    this.setValue(new Date(fieldElement.textContent as unknown as Date));
  }

  render() {
    return <DatePicker
        selected={this.value_}
        onChange={this.onDateSelected_}
        inline />
  }
}

Blockly.fieldRegistry.register('field_react_date', ReactDateField);

export default ReactDateField;