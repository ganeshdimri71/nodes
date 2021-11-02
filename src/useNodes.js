import React, { useState } from "react";

const useNodes = () => {
    const [increment, setIncrement] = useState(0);
		function incrementState() {
            setIncrement( ( prevState ) => prevState + 1 );
            return increment;
		}
		return incrementState;
};

export default useNodes;
