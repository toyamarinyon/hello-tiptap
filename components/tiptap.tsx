"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ReactNode } from "./react-extension";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit, ReactNode],
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
			},
		},
		content: `
		<p>Hello World! 🌎️</p>
		<p><react-component label="HELLO">H!!</react-component><span>hello2222</span><em>hello</em></p>
		<react-component count="4">H!!</react-component>
		<p>Nice!!!</p>`,
	});

	return <EditorContent editor={editor} className="p-1" />;
};

export default Tiptap;
