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
        it('allFeeds exists and has a length greater than 0', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //This test looks to see if allFeeds array have urls that are defined
        //and have a address specified
        it("URL is defined and is not empty", function(){
            for(let i = 0; i <allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(0);
            }
        });

        //as with the url test, this tests to see if each feed has a name 
        //and its not empty
        it("allFeeds name are defined and not empty", function(){
            for(let i = 0; i <allFeeds.length; i++){    
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(0);
            }
        });
    });


    //This test suite looks at the menu and whether it functions.
    describe("The Menu", function(){
        //This test looks to see if menu-hidden class is there.
        //If it is, then the menu is hidden by default
        it("Menu is hidden by default", function(){
             expect($("body").hasClass("menu-hidden")).toBe(true);
        });
        
        //These two tests checks to see if there is functionality in the menu
        //button.  The trigger simulates it then sees if the menu-hidden gets toggled
        var menuIcon = $('.menu-icon-link');
        it("should change visibility when the menu icon is clicked", function() {
            menuIcon.trigger('click');
            expect($("body").hasClass('menu-hidden')).toBe(false);
            
            menuIcon.trigger('click');
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });
    });   
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function(){
        
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

    //This test suite looks if the feed actually works
    describe("New Feed Selection", function(){
        //Since loadFeed is asynchronous, we need to use a beforeEach function
        //to gather the data to be tested on
        var firstEntry;
        var secondEntry;

        //Necessary because the function is asynchronous
        beforeEach(function(done){
            loadFeed(0, function(){
                firstEntry = $(".feed").html();
                
                //Getting the second entry
                loadFeed(1, function(){
                    secondEntry = $(".feed").html();
                    done();
                });
            });
        });
        //This checks for duplication with first and second entry when loadFeed(0)
        //and loadFeed(1) are called.
        it("Content changes", function(){
            expect(firstEntry).not.toBe(secondEntry);
        });
    });
}());
