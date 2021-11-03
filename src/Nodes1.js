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

function Nodes1() {
	const [nodes, setNodes] = useState([]);
	const [currentKey, setCurrentKey] = useState("a");
	const [currentKeyValue, setCurrentKeyValue] = useState(0);
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

	

	const handleIncrement = () => {
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
		if (currentKeyValue < 25) {
			setCurrentKeyValue(currentKeyValue + 1);
			setCurrentKey(arr[currentKeyValue + 1]);
			setCurrentKeyValueOne([]);
		} else {
			setCurrentKeyValue(0);
		}
	};

	

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
			<button onClick={handleIncrement}>Click</button>
		</>
	);
}

export default Nodes1;
