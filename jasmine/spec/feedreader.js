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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         for(let i = 0; i < allFeeds.length; i++){
            //This test looks to see if all the url in allFeeds are defined and not empty
            it("URL is defined and is not empty", function(){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(0);
            });
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        for(let i = 0; i <allFeeds.length; i++){
            it("allFeeds name are defined and not empty", function(){
                //as with the url test, this tests to see if each feed has a name 
                //and its not empty
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(0);
            });
        }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The Menu", function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("Menu is hidden by default", function(){
            //This test looks to see if menu-hidden class is there.
            //If it is, then the menu is hidden by default
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        var menuIcon = $('.menu-icon-link');
        it("should change visibility when the menu icon is clicked", function() {
            //These two tests checks to see if there is functionality in the menu
            //button.  The trigger simulates it then sees if the menu-hidden gets toggled
            menuIcon.trigger('click');
            expect($("body").hasClass('menu-hidden')).toBeFalsy();
            
            menuIcon.trigger('click');
            expect($("body").hasClass('menu-hidden')).toBeTruthy();
        });
    });   
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var firstEntry;
        //Necessary since the function is asynchronous.  The function needs to be
        //called first and completed in order for the test to be preformed.
        beforeEach(function(done){
            loadFeed(0, function(){
                firstEntry = allFeeds[0]
                done();
            });
        });
        it("There is at least one entry", function(){
            //This test checks to see if the first entry exists when loadFeed(0) is called
            expect(firstEntry).toBeDefined();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstEntry;
        var secondEntry;

        //Necessary because the function is asynchronous
        beforeEach(function(done){
            loadFeed(0, function(){
                firstEntry = allFeeds[0];
                done();
            });
            loadFeed(1, function(){
                secondEntry = allFeeds[1];
                done();
            });
        });
        it("Content changes", function(){
            //This checks for duplication with first and second entry when loadFeed(0)
            //and loadFeed(1) are called.
            expect(firstEntry).not.toBe(secondEntry);
        });
    });
}());
