import React, { useState, useEffect } from "react";
import shortid from "shortid";

import {
	Group,
	Rect,
	Stage,
	Line,
	Layer,
	Polygon,
	Ellipse,
	Transformer,
	Circle,
	Text,
} from "react-konva";

function ClassNodes1() {
	const [nodes, setNodes] = useState([]);
	const [currentKey, setCurrentKey] = useState("a");
	const [currentKeyValue, setCurrentKeyValue] = useState([]);
	const [currentKeyValueOne, setCurrentKeyValueOne] = useState([1]);

	const handleClickOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		setNodes([
			...nodes,
			[pos.x, pos.y, currentKey + currentKeyValueOne.length],
		]);
		let temp = currentKeyValueOne;
		temp.push(1);
		setCurrentKeyValueOne(temp);
	};

	const keyPressEventHandler = (e) => {
		console.log(
			"The value of the length of the current key value is : ",
			currentKeyValue.length
		);
		console.log("Hi I am key Press");
		console.log("The value of the nodes is : ", nodes);
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
			"x",
			"y",
			"z",
		];
		if (currentKeyValue.length <= 25) {
			console.log("Hi I am also key Press");
			let temp = currentKeyValue;

			setCurrentKeyValue(temp);
			setCurrentKey(arr[currentKeyValue.length]);
			temp.push(1);
			setCurrentKeyValueOne([1]);
		} else {
			let temp = currentKeyValue;
			temp.splice(0, temp.length);
			setCurrentKeyValue(temp);
		}
		// var KEYCODE_ESC = 27;
		// if (e.keyCode === KEYCODE_ESC ) {
		// 	let temp = currentKeyValue;
		// 	temp.push(1);
		// 	setCurrentKeyValue(temp);

		// 	setCurrentKey(arr[currentKeyValue.length]);
		// 	setCurrentKeyValueOne([1]);
		// } else {
		// 	setCurrentKeyValue(-1);
		// }
	};

	useEffect(() => {
		window.addEventListener("keydown", keyPressEventHandler);
		console.log("I am mounted...!");

		return () => window.removeEventListener("keydown", keyPressEventHandler);
	}, []);

	return (
		<>
			<div id="container"></div>
			<Stage
				width={window.innerWidth}
				height={window.innerHeight}
				container="container"
				onClick={handleClickOnStage}
			>
				<Layer>
					<Group>
						{nodes.map((node, i) => {
							return (
								<>
									<Text
										key={new Date().getMilliseconds()}
										x={node[0] - 9}
										y={node[1] - 23}
										text={node[2]}
										fill="grey"
									/>
									<Circle
										key={`${node[1]}`}
										x={node[0]}
										y={node[1]}
										fill="black"
										radius={10}
										shadowBlur={5}
									/>
									<Circle
										key={`${node[2]}`}
										x={node[0]}
										y={node[1]}
										fill="white"
										radius={5}
										shadowBlur={5}
									/>
								</>
							);
						})}
					</Group>
				</Layer>
			</Stage>
		</>
	);
}

export default ClassNodes1;
