class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = new Map();     // userId -> [[time, tweetId]]
        this.followMap = new Map();  // userId -> Set()
    }

    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId).push([this.time, tweetId]);
        this.time++;
    }

    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }

        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }

    getNewsFeed(userId) {
        let feed = [];

        if (this.tweets.has(userId)) {
            feed.push(...this.tweets.get(userId));
        }

        if (this.followMap.has(userId)) {
            for (let followee of this.followMap.get(userId)) {
                if (this.tweets.has(followee)) {
                    feed.push(...this.tweets.get(followee));
                }
            }
        }

        feed.sort((a, b) => b[0] - a[0]);

        let result = [];

        for (let i = 0; i < Math.min(10, feed.length); i++) {
            result.push(feed[i][1]);
        }

        return result;
    }
}