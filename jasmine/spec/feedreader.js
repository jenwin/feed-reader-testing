//runs when the dom is ready
$(function() {
  //test suite RSS Feeds
  describe('RSS Feeds', () => {
    //allFeeds is defined and not empty
    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    //each url is defined and not empty
    for (const feed of allFeeds) {
      it('has URL', () => {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    }
    //allFeeds name is defined and not empty
    for (const feed of allFeeds) {
      it('has name', () => {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    }
  });

  //test suite The menu
  describe('The menu', () => {
    const menuIcon = $('.menu-icon-link');
    //test ensures menu element is hidden by default
    it('is hidden', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
   //test ensures menu changes visibility when menu icon is clicked and clicked again
    it('is visible when clicked and hidden when clicked again', () => {
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  //test suite named Initial Entries
  describe('Initial Entries', () => {
    const entryFeed = $('.entry, .feed').length;
    /*ensures loadFeed function is called and completes its work
     *contains a single entry element within the feed*/
    beforeEach((done) => {
      loadFeed(0, () => {
        done();
      });
    });

    it('is finished show the next entry', (done) => {
      expect(entryFeed).toBeGreaterThan(0);
        done();
    });
  });

  //test suite New Feed Selection
  describe('New Feed Selection', () => {
    let initFeed;
    let newFeed = $('.feed').html();
    //ensures new feed is loaded with content that changes
    beforeEach((done) => {
      loadFeed(0, () => {
        initFeed = $('.feed').html();
          loadFeed(1, () => {
            done();
          });
        });
    });

    it('when new feed is loaded', (done) => {
      expect(initFeed).not.toEqual(newFeed);
        done();
    });
  });
}());