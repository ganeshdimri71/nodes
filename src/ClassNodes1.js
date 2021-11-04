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
	const [currentKeyValue, setCurrentKeyValue] = useState(0);
	const [currentKeyValueOne, setCurrentKeyValueOne] = useState([]);

	const handleClickOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		setNodes([
			...nodes,
			[pos.x, pos.y, currentKey +( currentKeyValueOne.length+1)],
		] );
		console.log( currentKey );
		let temp = currentKeyValueOne;
		temp.push(1);
		setCurrentKeyValueOne(temp);
	};

	const keyPressEventHandler = ( e ) => {
		console.log(e)
		var KEYCODE_ESC = 27;
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
		if ( e.keyCode === KEYCODE_ESC ) {
			console.log("current key ", currentKey)
			let index = arr.indexOf( currentKey );
			console.log('index', index)
			console.log(arr[index + 1]);
			setCurrentKey( arr[ index + 1 ] )
			setCurrentKeyValueOne([])
		}
	
	};

	

	return (
		<>
			<div id="container" tabIndex="0" onKeyDown={(e) => keyPressEventHandler(e)}>
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
											key={shortid.generate()}
											x={node[0] - 9}
											y={node[1] - 23}
											text={node[2]}
											fill="grey"
										/>
										<Circle
											key={Math.random()}
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
			</div>
		</>
	);
}

export default ClassNodes1;

