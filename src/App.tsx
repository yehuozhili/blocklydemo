/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 15:33:05
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-20 20:43:57
 * @FilePath: \blockdemo\src\App.tsx
 */
import './App.css';
import BlocklyJS from 'blockly/javascript';
import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';
import './blocks/customblock';
import './generator/index';
import { useRef } from 'react';


function App() {
  const blocklyDiv = useRef<HTMLDivElement>(null)
  const toolbox = useRef<HTMLElement>(null)
  const generateCode = ()=>{
    var code = BlocklyJS.workspaceToCode(
      (blocklyDiv as any).current.workspace
    );
    console.log(code);
  }

  return (
    <div className="App">
    <header className="App-header">
      <button onClick={()=>generateCode()}>Convert</button>
      <BlocklyComponent  
        blocklyDiv={blocklyDiv}
        toolboxDiv={toolbox}
        readOnly={false} trashcan={true} media={'media/'}
      move={{
        scrollbars: true,
        drag: true,
        wheel: true
      }}
      initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
  `}>
         <Block   type="myblock">
          <Value name="mycount">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
        <Block type="test_react_field" />
        <Block type="test_react_date_field" />
        <Block type="controls_ifelse" />
        <Block type="logic_compare" />
        <Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="logic_operation" />
        <Block type="logic_negate" />
        <Block type="logic_boolean" />
        <Block type="logic_null" disabled="true" />
        <Block type="logic_ternary" />
        <Block type="text_charAt">
          <Value name="VALUE">
            <Block type="variables_get">
              <Field name="VAR">text</Field>
            </Block>
          </Value>
        </Block>
      </BlocklyComponent>
    </header>
  </div>
  );
}

export default App;
