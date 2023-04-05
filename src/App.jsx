import { VideoPlayer } from './components/VideoPlayer';
import video from './assets/videos/video.mp4';

function App() {
	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<VideoPlayer src={video} />
		</div>
	);
}

export default App;
