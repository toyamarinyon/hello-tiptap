import { type NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React from "react";

export default (props: NodeViewProps) => {
	const increase = () => {
		props.updateAttributes({
			count: props.node.attrs.count + 1,
		});
	};

	return (
		<NodeViewWrapper className="relative rounded border-2 border-blue-500 bg-blue-50 pt-6">
			<span className="absolute bg-blue-500 text-white top-0 px-2 rounded-br">
				React Component
			</span>
			<div className="px-2">
				<button onClick={increase} type="button">
					This button has been clicked {props.node.attrs.count} times.
				</button>
			</div>
		</NodeViewWrapper>
	);
};
