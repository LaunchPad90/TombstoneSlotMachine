# TombstoneSlotMachine

``
slot machine tombstone theme

* render the 3 window blocks
    - add extra lines to win 
    - winner message
    - different messages for losing on a single turn and running out of monies
* math.random to cycle thru images and then check for match
* keep track of monies
* pull down arm that will start spin cycle
* app state variable
    current monies
    bet amount
    winnings 
    monies stack
* functions for :
    - looping through array of matching objects
* event listener for handle pull(click)
    - make function to flash images
* animations if possible
define a lookup structure 
make one array to hold images.
make another array with all the values of images ex: [0,0,0,0,0,0,0,0,0,0,0,0,01,1,1,1,2,2,2,3] each number references the image. less chance to get certain imagaes/payouts
* create array to hold index values of each image. 
    - assign point values 
    - set payout values to each image, more value less chance of getting that image 

* setTimeout will need callback to stop code from running while the reels spin on timeouts
``