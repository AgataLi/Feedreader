/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that ensures that allFeeds have a URL defined
         * and that the URL is not empty.
         */
        it('have not empty URL', function () {

            for(const allFeed of allFeeds) {
                expect(allFeed.url).toBeDefined(); 
                expect(allFeed.url).not.toBe(0); 
            }        
        });

        /* Test ensures allFeeds have a name defined
         * and that the name is not empty.
         */

        it('have names', function () {
            for(const allFeed of allFeeds) {
                expect(allFeed.name).toBeDefined(); 
                expect(allFeed.name).not.toBe(); 
            }        
        });
    });


    
    describe('The menu', function() { 

        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function (){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
        const menuIcon = $('.menu-icon-link');
          
        it('is changing visibility after clicking', function (){
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });



    describe('Initial Entries', function() { 
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('should be at least 1 element in entry', function (done){
        
        	let entryElement = $('.entry'),
                container = $('.feed');

            expect((container&&entryElement).length).toBeGreaterThan(0);
            done();
         });
    });


    describe('New Feed Selection', function() { 
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

       	let content; // the conent after first ladFeed running
       	let newContent; // the conent after second ladFeed running
     
        beforeEach(function(done){
            loadFeed(0, function() {
                content = $('.feed').html();
                        
            loadFeed(1, function(){
                newContent = $('.feed').html();
            done();
            
            });
            });
        });

        it('the content is changing', function() {
            
            expect(newContent).not.toEqual(content);
        });

    });

}());