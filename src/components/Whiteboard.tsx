import { Excalidraw } from "@excalidraw/excalidraw";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "@excalidraw/excalidraw/index.css";

export const Whiteboard: React.FC<{ initialData?: any; excalidrawRef?: React.Ref<any>; instanceKey?: number }> = ({ initialData, excalidrawRef }) => {
	// Use initialData to restore scene when remounted
	return (
		<Box sx={{ width: 800, height: 600, bgcolor: 'grey.200' }}>
			<Excalidraw  initialData={initialData} />
		</Box>
	);
};

export default Whiteboard;
