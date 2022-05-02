import feedSchema from '../db/models/FeedModel.js';
import Parser from 'rss-parser';
const parser = new Parser();

class FeedController {
  async listFeeds(req, res) {
    const feedsList = await feedSchema.find({}, 'link').exec();
    res.status(200).json(feedsList);
  }

  async showFeed(req, res) {
    let feedId = req.body.feedId;

    try {
      let result = await feedSchema.findOne({
        _id: feedId,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
    }
  }

  async addFeed(req, res) {
    const feedLink = req.body.link;
    const feed = new feedSchema({
      link: feedLink,
    });
    try {
      await feed.save();
      res.status(201);
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  }

  async updateFeed(req, res) {
    const feedId = req.body.feedId;
    const newRssLink = req.body.newRssLink;

    try {
      await feedSchema.updateOne(
        { _id: feedId },
        {
          $set: { link: newRssLink },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async deleteFeed(req, res) {
    const feedId = req.body.feedId;
    try {
      await feedSchema.deleteOne({ _id: feedId });
      res.status(200);
    } catch (err) {
      console.error(err);
    }
  }

  async parseFeed(req, res) {
    const feedLink = req.body.feedLink;
    let feeds = [];
    try {
      (async () => {
        feeds = await parser.parseURL(feedLink);
        res.json(feeds);
      })();
    } catch (e) {
      res.status(404).send('Cant parse that feed :/');
    }
  }
}

export default new FeedController();
