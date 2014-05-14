suiteGroup('Templates.Week', function() {
  'use strict';

  var subject;

  suiteSetup(function() {
    subject = Calendar.Templates.Week;
  });

  function a() {
    return '<a></a>';
  }

  test('#sidebarHour', function() {
    var result = subject.sidebarHour.render({
      hour: '5',
      displayHour: 'foo'
    });

    assert.ok(result);
    assert.include(result, 'hour-5');
    assert.include(result, 'foo');
  });

  test('#hour', function() {
    var hour = 'my-hour-5';
    var result = subject.hour.render({
      items: a(),
      hour: hour
    });

    assert.ok(hour, 'renders');
    assert.include(result, hour, 'has hour');
    assert.include(result, a(), 'has link');
  });

  test('#event', function() {
    var calId = 'calid';
    var busytimeId = 'busyid';
    var title = 'foo';

    var result = subject.event.render({
      calendarId: calId,
      busytimeId: busytimeId,
      title: title
    });

    assert.ok(result, 'has html');

    assert.include(result, calId, 'has calendarId');
    assert.include(result, busytimeId, 'has busytime id');
    assert.include(result, title, 'has title');
  });

  suite('#header', function() {
    test('today', function() {
      var result = subject.header.render({
        isToday: true,
        title: 'foo'
      });
      assert.ok(result);
      assert.include(result, 'foo', 'title');
      assert.include(result, 'is-today', 'is-today class');
    });

    test('not today', function() {
      var result = subject.header.render({
        isToday: false,
        title: 'foo'
      });
      assert.ok(result);
      assert.include(result, 'foo', 'title');
      assert.ok(result.indexOf('is-today') === -1, 'is-today class');
    });
  });

  test('#frame', function() {
    var result = subject.frame.render();
    assert.ok(result);
  });

});


