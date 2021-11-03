// import React, { useState } from "react";

// import {
// 	Group,
// 	Rect,
// 	Stage,
// 	Line,
// 	Layer,
// 	Polygon,
// 	Ellipse,
// 	Transformer,
// 	Circle,
// 	Text,
// } from "react-konva";

// class ClassNodes1 extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			nodes: [],
// 			nodes1: [],
// 		};
// 	}
// 	 handleClickOnStage = (e)=> {
// 		let pos = e.target.getStage().getPointerPosition();
// 		this.state.nodes([...nodes, [pos.x, pos.y]], () => {
// 			console.log("the value of the node is : ", this.state.nodes);
// 		});
// 		return (
// 			<>
// 				<div id="container"></div>
// 				<Stage
// 					width={window.innerWidth}
// 					height={window.innerHeight}
// 					container="container"
// 					onClick={this.handleClickOnStage}
// 				>
// 					<Layer>
// 						<Group>
// 							{nodes.map((node, i) => {
// 								console.log("The value of the node inside render  is : ", node);
// 								return (
// 									<>
// 										<Text
// 											x={node[0] - 20}
// 											y={node[1] - 20}
// 											text={`${nodes1}`}
// 											fill="grey"
// 										/>
// 										<Circle
// 											x={node[0]}
// 											y={node[1]}
// 											fill="black"
// 											radius={10}
// 											shadowBlur={5}
// 										/>
// 									</>
// 								);
// 							})}
// 						</Group>
// 					</Layer>
// 				</Stage>
// 			</>
// 		);
// 	}
// }

// export default ClassNodes1;
