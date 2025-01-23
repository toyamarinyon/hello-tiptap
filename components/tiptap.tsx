"use client";

import { Node } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ReactExtension from "./react-extension";

const CustomNode = Node.create({
	name: "customNode",

	// Your code goes here.
});

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit, ReactExtension],
		content: `
		<p>Hello World! 🌎️</p>
		<react-component count="0"></react-component>
		<p>Nice!!!</p>`,
	});

	return <EditorContent editor={editor} />;
};

export default Tiptap;
