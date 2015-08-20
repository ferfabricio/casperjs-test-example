casper.test.begin('Testing index of blog.fernando.inf.br', 5, function(test) {
  casper.start('http://blog.fabricio.inf.br', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function() {
    test.assertExists('head > title');
    test.assertExists('#header-inner > div.titlewrapper > h1');
  });

  casper.then(function() {
    test.assertTitle('Fernando Fabricio');
    test.assertEquals(
      this.getHTML('#header-inner > div.titlewrapper > h1'),
      "\nFernando Fabricio\n"
    );
  });

  casper.then(function(){
    casper.capture('screenshot.png',{
      top: 0,
      left: 0,
      width: 800,
      height: 300
    });
  });

  casper.run(function() {
    test.done();
  });
});
