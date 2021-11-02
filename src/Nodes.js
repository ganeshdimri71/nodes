import React, { useState, useEffect } from "react";
import useNodes from "./useNodes";

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

function Nodes() {
	const [lines, setLines] = useState([]);
	const [draw, setDraw] = useState(false);
	const [text, setText] = useState("a");
	const [number, setNumber] = useState([1, 2, 3]);
	console.log("The value of this component count is : ");

	useEffect(() => {
		window.addEventListener("keydown", keyPressEventHandler);
		console.log("I am mounted...!");
	}, []);

	const handleClickOnStage = (e) => {
		console.log(
			"The value of this component count is inside handleclickonstage is : "
			
		);
		let pos = e.target.getStage().getPointerPosition();
		setLines([...lines, [pos.x, pos.y, pos.x, pos.y]]);
		setDraw(true);
		console.log("The value of the setLines is : ", lines);
		console.log("The length of the line is : ", lines.length);
	};

	const handleMouseMoveOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		if (draw) {
			let temp = [...lines];
			temp[temp.length - 1][2] = pos.x;
			temp[temp.length - 1][3] = pos.y;
			setLines(temp);
		}
	};
	const keyPressEventHandler = (e) => {
		var KEYCODE_ESC = 27;
		if (e.keyCode === KEYCODE_ESC) {
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
				onMouseMove={handleMouseMoveOnStage}
			>
				<Layer>
					<Group>
						{lines.map((line, i) => {
							return (
								<>
									<Line
										points={[line[0], line[1], line[2], line[3]]}
										stroke="black"
										lineCap="round"
										name="line"
										lineJoin="round"
										strokeWidth={2}
										z-index={0}
									/>
									<Text
										x={line[0] - 20}
										y={line[1] - 20}
										text={`${text}`}
										fill="grey"
									/>
									<Circle
										x={line[0]}
										y={line[1]}
										width={10}
										height={10}
										fill="black"
										radius={10}
										strokeWidth={20}
										shadowBlur={5}
										onClick={draw}
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

export default Nodes;
