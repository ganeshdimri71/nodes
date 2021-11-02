import React, { useState } from "react";

const useNodes = () => {
	let count = [1, 2, 3];
	console.log("I am useNodes count : ", count);
    
	return count;
};

export default useNodes;
