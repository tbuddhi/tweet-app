import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, 
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, 
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, 
    TwitterOnAirButton } from 'react-twitter-embed';

class EmbedTweet extends Component {
    render(){
        return(
            <div>
                {/* <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{height: 400}}
                />
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />

                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />

                <TwitterMentionButton
                    screenName={'saurabhnemade'}
                /> */}

                {/* <TwitterFollowButton
                    screenName={'saurabhnemade'}
                /> */}

                {/* <TwitterMomentShare
                    momentId={'650667182356082688'}
                /> */}

                {/* <TwitterTimelineEmbed 
                    sourceType="widget" 
                    widgetId="539487832448843776" 
                    options={{height: 400}} 
                /> */}
                {/* <TwitterTimelineEmbed
                sourceType="profile"
                screenName="tbuddhi"
                options={{height: 400}}
            /> */}
            <TwitterTimelineEmbed 
            sourceType="timeline" 
            id="539487832448843776" 
            options={{height: 400,tweetLimit: 10}} 
            />
                {/* <TwitterMomentShare
                    id={1364031673}
                />
                <TwitterVideoEmbed
                    id={'560070183650213889'}
                />
                <TwitterOnAirButton
                    id={'560070183650213889'}
                /> */}
            </div>
        )
    }
}

export default EmbedTweet;