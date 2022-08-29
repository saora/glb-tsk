Feature: Products

Background: Login
Given The user opens the swaglabs page
And He logs into the application as standard user


Scenario Outline: Adding items to shping cart 
Given The user adds items with price equal to "<productPrice>" 
And He goes to the shoping cart 
And He clicks on checkout button
And He types the first name "<firstName>"
And He types the last name "<lastName>"
And He types the postal code "<postalCode>"
And He clicks on continue button   
When He confirms by clicking on finish button
Then The confirmation text "<confirmationText>" should be displayed 

Examples:
| productPrice    |firstName | lastName | postalCode |  confirmationText | 
| $15.99          | Salvador | Ortuno   |  016500    |  Your order has been dispatched, and will arrive just as fast as the pony can get there!|

