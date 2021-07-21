/*
 * @Author: yehuozhili
 * @Date: 2021-07-15 15:58:54
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-15 16:04:57
 * @FilePath: \blockdemo\src\Blockly\index.ts
 */
import React, { PropsWithChildren } from 'react';
import BlocklyComponent from './BlocklyComponent';

export default BlocklyComponent;

const Block = (p:PropsWithChildren<any>) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("block", props, children);
};

const Category = (p:PropsWithChildren<any>) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("category", props, children);
};

const Value = (p:PropsWithChildren<any>) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("value", props, children);
};

const Field = (p:PropsWithChildren<any>) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("field", props, children);
};

const Shadow = (p:PropsWithChildren<any>) => {
    const { children, ...props } = p;
    props.is = "blockly";
    return React.createElement("shadow", props, children);
};

export { Block, Category, Value, Field, Shadow }