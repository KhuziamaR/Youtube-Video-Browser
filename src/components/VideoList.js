import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	// props.videos
	const RenderVideos = videos.map((video) => {
		return <VideoItem video={video} />;
	});

	return <div> {RenderVideos}</div>;
};
export default VideoList;
