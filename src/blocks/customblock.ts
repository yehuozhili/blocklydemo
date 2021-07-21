/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 16:05:40
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-21 10:49:00
 * @FilePath: \blockdemo\src\blocks\customblock.ts
 */


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';





var testReactField = {
  "type": "test_react_field",
  "message0": "custom field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_field']  = {
  init: function(this: Blockly.Block__Class) {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function(this: Blockly.Block__Class) {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};

function randomColour() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}


Blockly.Blocks['colour_picker'] = {
  init: function(this: Blockly.Block__Class) {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_colour_slider",
          "name": "COLOUR",
          "colour": randomColour()
        }
      ],
      "outputShape": 400,
      "output": "Colour"
    });
  }
};



Blockly.Blocks['control_repeat'] = {
  init: function(this: Blockly.Block__Class) {
    this.jsonInit({
      "id": "control_repeat",
      "message0": "%1 %2 %3 %4 %5",
      "args0": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_colour_slider",
          "name": "TEXT",
          "colour": 'XVSDAS'
        },
        {
          "type": "input_statement",
          "name": "cxz"
        },
        {
          "type": "field_image",
          // eslint-disable-next-line no-useless-concat
          "src": "media/" + "control_repeat.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
        },
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        }
      ],
      "inputsInline": null,
      "previousStatement": null,
      "nextStatement": null,
    });
  }
};



Blockly.Blocks['myblock']= {
  init : function(this: Blockly.Block__Class){
    this.jsonInit( {
      "type": "myblock",
      "message0": "我的重复 %1 次 %2 执行 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "mycount",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    })  
  }
}