import Twitter from 'twitter';

class TwitterService {
    twitterClient: Twitter;

    constructor() {    
        const apiKey:string = process.env.API_KEY ?? '';
        const apiSecret:string = process.env.API_SECRET ?? '';
        const accessToken:string = process.env.ACCESS_TOKEN ?? '';
        const accessTokenSecret:string = process.env.ACCESS_TOKEN_SECRET ?? '';

        this.twitterClient = new Twitter({
            consumer_key: apiKey,
            consumer_secret: apiSecret,
            access_token_key: accessToken,
            access_token_secret: accessTokenSecret
        });
        this.getTweetsByUser = this.getTweetsByUser.bind(this);
    }

    public async getTweetsByUser(username: string) {
        try {
            let response = await this.twitterClient.get('statuses/user_timeline', {screen_name: username});
            return response;
        } catch (err) {
            throw err;
        }
    }

}

export default new TwitterService();