describe('Gilded Rose', function () {
  it('should do something', function () {
    spyOn(update_quality, 'bob');
    update_quality();
    expect('bob').toHaveBeenCalled();
  });
});
