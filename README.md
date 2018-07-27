# Reader Project

This reader will dynamically give you links from Udacity's blog.  To look 
at a news story, just click on the link.  There is a menu button that allows
the user to see other sections.


# The Test Details

## Test 1

In the first test, I did a simple for loop to look at each feed url to see
if they were defined and weren't empty

## Test 2

In the second test, I did a simple for loop (just like the first) at each of the 
feed's name to see if they were defined and weren't empty

## Test 3

The third test looked at whether the default class for body was `menu-hidden`.  If it was, then we know that (based on the css) the menu would be not be seen.  I used `hasClass()` to see if `menu-hidden` was present.

## Test 4

Test four looked at if the toggle functionality worked.  I used `trigger()` to simulated the trigger so the test can check.

## Test 5

The fifth test looked at if the first entry existed.  Because `loadFeed()` was asynchronous,I had to use `beforeEach()` to have the `loadFeed()` run first so the test can be performed.  I created a global variable `firstEntry` to hold the value after `loadFeed()` ran.  Then I checked if `firstEntry` was defined.

## Test 6

The final test looked to see if `loadFeed()` did not repeat entries.  So I created two variables: `firstEntry` and `secondEntry` to hold the values.  Then after the function loaded, I tested to see if they were not equal.