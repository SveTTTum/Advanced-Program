Feature: Dashboards

    @PC-3 @project
    Scenario: Verify that dashboard contains expected fields in header
        * I logged in
        * I am on "Home" page
        * I select "personal" project
        * I see all fields in dashboard header

    @PC-4 @project
    Scenario: Verify that Demo Dashboard has all header buttons and widgets
        * I logged in
        * I am on "Home" page
        * I select "personal" project
        * I click "DemoDashboard"
        * I see all header buttons on the selected dashboard
        * I see all "DemoDashboardWidgets" on the selected dashboard
        