import React, { useState, useEffect } from "react";

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
	const [currentKeyValueOne, setCurrentKeyValueOne] = useState([]);
	const handleClickOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		setNodes([
			...nodes,
			[pos.x, pos.y, currentKey + currentKeyValueOne.length],
		]);
		let temp = currentKeyValueOne;
		temp.push(1);
		setCurrentKeyValueOne(temp);
		console.log(
			"The value of the currentKeyValueOne is : ",
			currentKeyValueOne
		);
		console.log("The value of the nodes is : ", nodes);
	};

	const keyPressEventHandler = (e) => {
		var KEYCODE_ESC = 27;
		if (e.keyCode === KEYCODE_ESC) {
			let temp = currentKeyValue;
			temp.push(1);
			setCurrentKeyValue(temp);
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
				"y",
				"z",
			];
			setCurrentKey(arr[currentKeyValue.length]);
			setCurrentKeyValueOne([]);
		}
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
										key={new Date().getTime()}
										x={node[0] - 20}
										y={node[1] - 20}
										text={node[2]}
										fill="grey"
									/>
									<Circle
										x={node[0]}
										y={node[1]}
										fill="black"
										radius={10}
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
