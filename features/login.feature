Feature: Login

    @home
    Scenario: Verify the Login page title is Report Portal
        * I am on "Login" page
        * The title should be "Report Portal"
        * I wait 3 seconds

    @login
    Scenario: Verification of the UI of the logged user
        * I logged in as "superadmin" with password "erebus"
        * I am on "Home" page