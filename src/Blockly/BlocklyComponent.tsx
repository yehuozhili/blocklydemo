/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 15:45:35
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-15 21:34:15
 * @FilePath: \blockdemo\src\Blockly\BlocklyComponent.tsx
 */
import  { PropsWithChildren, RefObject, useEffect } from 'react';
import './BlocklyComponent.css';

import Blockly, { BlocklyOptions } from 'blockly/core';
import locale from 'blockly/msg/zh-hans';
import 'blockly/blocks';
Blockly.setLocale(locale);


interface BlocklyProps extends BlocklyOptions{
    initialXml:string,
    blocklyDiv:RefObject<HTMLDivElement>
    toolboxDiv:RefObject<HTMLElement>
}


function BlocklyComponent(props:PropsWithChildren<BlocklyProps>){
    const { initialXml, children,blocklyDiv,toolboxDiv, ...rest } = props;

    useEffect(()=>{
        if(blocklyDiv.current && toolboxDiv.current){
            const primaryWorkspace = Blockly.inject(
                blocklyDiv.current,{
                    toolbox:toolboxDiv.current,...rest
                }
            )
            if (initialXml) {
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), primaryWorkspace);
            }
        }

    },[blocklyDiv, initialXml, rest, toolboxDiv])


    return <>
         <div ref={blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={toolboxDiv}>
                {props.children}
            </xml>
    </>
}

export default BlocklyComponent;