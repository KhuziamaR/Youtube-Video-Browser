import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	// props.videos
	const RenderVideos = videos.map((video) => {
		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
	});

	return <div className="ui relaxed divided list"> {RenderVideos}</div>;
};
export default VideoList;
