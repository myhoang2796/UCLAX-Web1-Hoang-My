import styled from 'styled-components';
import YouTube from 'react-youtube';

const Video = () => {

    const opts = {
        height: '300',
        width: '500',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <VideoStyled className='Video'>
            <YouTube videoId="w_wchgOXL1E" opts={opts} />
        </VideoStyled>
    );
}

export default Video;

const VideoStyled = styled.div`

`;