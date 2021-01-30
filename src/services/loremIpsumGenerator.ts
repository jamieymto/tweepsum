import twitter from 'twitter';
import twitterService from './twitterService';

class LoremIpsumGenerator {

    constructor() {    
        this.generate = this.generate.bind(this);
    }

    public async generate(username: string) {
        try {
            let response = await twitterService.getTweetsByUser(username);
            let loremIpsum = '';
            response.forEach((res: { text: string; }) => {
                const parsedText = res.text;
                const textArray = parsedText.split(' ');
                const sanitizedArray = textArray.filter((word: string | string[]) => !word.includes('@') && !word.includes('http'));
                loremIpsum = loremIpsum.concat(sanitizedArray.join(' '));
            });
            return loremIpsum;
        } catch (err) {
            throw err;
        }
    }
}

export default new LoremIpsumGenerator();