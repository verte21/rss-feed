import feedSchema from '../db/models/FeedModel.js';

class FeedControler {
  listFeeds(req, res) {
    res.json({
      hello: 'Hello world',
    });
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

      console.log('succes');
    } catch (err) {
      console.error(err);
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
    } catch (err) {
      console.error(err);
    }
  }
}

export default new FeedControler();
