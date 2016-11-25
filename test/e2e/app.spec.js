describe("toDoApp", function() {
  it("should get index page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("TomTom Angular");
  });
});
