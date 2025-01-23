import { Node, nodeInputRule } from "@tiptap/core";
import { type NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import React from "react";
import { PencilIcon } from "./icon";

const Component = (props: NodeViewProps) => {
	return (
		<NodeViewWrapper className="inline">
			<span
				contentEditable={false}
				className="text-green-500 inline-flex gap-0.5"
			>
				{`{{${props.node.attrs.label}`}{" "}
				<button
					type="button"
					className="border border-slate-500 rounded px-1 text-slate-500"
				>
					<PencilIcon />
				</button>
				{"}}"}
			</span>
		</NodeViewWrapper>
	);
};

export default Node.create({
	name: "reactComponent",
	group: "inline",
	inline: true,
	addAttributes() {
		return {
			label: {
				default: "",
			},
		};
	},
	parseHTML() {
		return [
			{
				tag: "react-component",
			},
		];
	},
	renderHTML() {
		return ["span"];
	},
	addNodeView() {
		return ReactNodeViewRenderer(Component);
	},
	addInputRules() {
		return [
			nodeInputRule({
				find: /{{[\w]+}}/,
				type: this.type,
				getAttributes: (match) => {
					const label = match[0].slice(2, -2);
					return { label };
				},
			}),
		];
	},
});
