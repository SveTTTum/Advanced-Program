Feature: Dashboards

    @project
    Scenario: Verify that dashboard contains expected fields in header
        * I logged in
        * I am on "Home" page
        * I select "personal" project
        * I see all fields in dashboard header
        