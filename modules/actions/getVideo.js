import * as t from "../types";


export const getVideo = (videoInfo) => {
	return {
		type: t.GET_VIDEO,
        payload: videoInfo,
	};
};