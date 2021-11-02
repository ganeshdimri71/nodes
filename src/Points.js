import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

const Points = () => {
	console.log("Points is rendered...!");
	const [text, setText] = useState("a");
	const [number, setNumber] = useState([1, 2, 3]);

	const arr = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"y",
		"z",
	];
	var count = 1;

	useEffect(() => {
        window.addEventListener( "keydown", keyPressEventHandler );
        console.log('I am mounte,...!')
	},[]);

	const keyPressEventHandler = (e) => {
		var KEYCODE_ESC = 27;
		if (e.keyCode === KEYCODE_ESC) {
			setText(arr[count]);
		}
		count = count + 1;
		console.log("count = ", count);
	};

	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Text x={92} y={175} text={`${text}${number[0]}`} />
				<Circle x={100} y={200} radius={10} fill="grey" />

				<Text x={392} y={175} text={`${text}${number[1]}`} />
				<Circle x={400} y={200} radius={10} fill="grey" />

				<Text x={692} y={175} text={`${text}${number[2]}`} />
				<Circle x={700} y={200} radius={10} fill="grey" />
			</Layer>
		</Stage>
	);
};

export default Points;
