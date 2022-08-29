Feature: Login

Scenario Outline: Login 
Given The user opens the swaglabs page
When He types the username "<username>"
And He types the password "<password>"
And He cliks on the login button
Then He should see the product list

Examples:
| username                |
| standard_user           |
#| locked_out_user         |
#| problem_user            |
#| performance_glitch_user |
