/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 16:25:40
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-21 11:32:27
 * @FilePath: \blockdemo\src\generator\index.ts
 */
import * as Blockly from 'blockly/core';
import 'blockly/javascript';

//@ts-ignore
Blockly.JavaScript['test_react_field'] = function (block :any) {
    console.log(block,'ccas')
    return 'console.log(\'custom block\');\n';
};
//@ts-ignore
Blockly.JavaScript['test_react_date_field'] = function (block :any) {
    console.log(block,'bbz')
    return 'console.log(' + block.getField('DATE').getText() + ');\n';
};
//@ts-ignore
Blockly.JavaScript['myblock'] = function (block :any) {
    // Repeat n times.
let repeats
  if (block.getField('mycount')) {
    // Internal number.
     repeats = String(Number(block.getFieldValue('mycount')));
  } else {
    //@ts-ignore
     repeats = Blockly.JavaScript.valueToCode(block, 'mycount','0')
  }//@ts-ignore
  let branch = Blockly.JavaScript.statementToCode(block, 'do');
  //@ts-ignore
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  let code = '';
  //@ts-ignore
  let loopVar = Blockly.JavaScript.nameDB_.getDistinctName(
      'count', Blockly.VARIABLE_CATEGORY_NAME);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
      //@ts-ignore
    endVar = Blockly.JavaScript.nameDB_.getDistinctName(
        'repeat_end', Blockly.VARIABLE_CATEGORY_NAME);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

