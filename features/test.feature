Feature: Login page Validation

Scenario: Validate the valid username and password
Given Launch Application
When Enter the username "Aiite" and password "Asdifefi"
And Click the login button
Then Validate the HomePage


Scenario: Validate the invalid username and password
Given Launch Application
When Enter the username "Aiite1212" and password "Asdife12121fi"
And Click the login button
Then Validate the HomePage